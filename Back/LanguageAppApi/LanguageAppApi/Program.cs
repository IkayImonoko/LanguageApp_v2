using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using LanguageAppApi;
using LanguageAppApi.Storage;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

var secretKey = "test_secret_key_real_one_should_be_in_a_file"; 
var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,

            ValidIssuer = "MyApp",
            ValidAudience = "MyUsers",
            IssuerSigningKey = key
        };
    });

builder.Services.AddAuthorization();

builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy
            .AllowAnyOrigin()  
            .AllowAnyMethod()  
            .AllowAnyHeader();  
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

//app.UseHttpsRedirection();
app.UseCors("AllowAll");

app.UseAuthentication();
app.UseAuthorization();

var wordPairsStorage = new WordPairsStorage();
var usersStorage =  new UsersStorage();
var authService = new AuthService("Data Source=localhost; Initial Catalog=testBase; User Id=sa; Password=qwerty;");
app.MapGet("/wordpairs", () =>
    {
        return wordPairsStorage.GetWordPairs();
    })
    .WithName("GetWordPairs");

app.MapPost("/wordpair", (WordPair wordPair) =>
{
    wordPairsStorage.AddWordPair(wordPair);
});

app.MapDelete("/wordpairs", async (HttpContext context) =>
{
    var ids = await context.Request.ReadFromJsonAsync<List<int>>();
    wordPairsStorage.DeleteWordPairs(ids);
    return Results.Ok(new { deletedIds = ids });
});

app.MapPut("/wordpair/{id}", async (int id, WordPair wordPair) =>
{
    wordPairsStorage.UppdateWordPair(id, wordPair);
});

app.MapPost("/user", (User user) =>
{
   usersStorage.AddNewUser(user);
});

app.MapPost("/login", (LoginModel login) =>
{
    if (authService.CheckLogin(login.Username, login.Password))
    {
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim("userId", "1"),
            new Claim(ClaimTypes.Role, "Admin")
        };

        var token = new JwtSecurityToken(
            issuer: "MyApp",
            audience: "MyUsers",
            claims: claims,
            expires: DateTime.Now.AddMinutes(30),
            signingCredentials: creds
        );

        var jwt = new JwtSecurityTokenHandler().WriteToken(token);
        return Results.Ok(new { token = jwt });
    }

    return Results.Json(
        new { success = false, message = "Incorrect name or password." },
        statusCode: StatusCodes.Status401Unauthorized
    );
});
app.Run();