using DotNetEnv;

namespace ChatBot.Config;

public static class Settings{
    
    public static string GeminiKey = Env.GetString("GEMINI_KEY");
}