using LanguageAppApi;
using LanguageAppApi.Storage;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
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

var wordPairsStorage = new WordPairsStorage();
var usersStorage =  new UsersStorage();
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
app.Run();
