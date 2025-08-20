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

app.UseHttpsRedirection();
app.UseCors("AllowAll");

var wordPairsStorage = new WordPairsStorage();
app.MapGet("/wordpairs", () =>
    {
        return wordPairsStorage.GetWordPairs();
    })
    .WithName("GetWordPairs");

app.MapPost("/wordpair", (WordPair wordPair) =>
{
    wordPairsStorage.AddClaimedSquare(wordPair);
});

app.Run();
