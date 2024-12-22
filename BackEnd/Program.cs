using ChatBot.Services;
using DotnetGeminiSDK;
using ChatBot.Config;
using DotNetEnv;

Env.Load();

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

builder.Services.AddGeminiClient(config =>
    {
        config.ApiKey = Settings.GeminiKey;
        config.ImageBaseUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash"; 
    });
builder.Services.AddScoped<AIService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();
app.Run();

