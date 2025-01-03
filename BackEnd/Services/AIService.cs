using DotnetGeminiSDK.Client.Interfaces;

namespace ChatBot.Services;

public class AIService(IGeminiClient geminiClient)
{
    private readonly IGeminiClient _geminiClient = geminiClient;
    
    public async Task<string> SendAIAsync(string message)
    {
        string bodyMessage = @$"
            Nossa conversa esta limitada apenas a linguagens de programação.
            Caso eu mesmo me refira a outro assunto abaixo você pode ignorar e dizer que não entendeu.
            
            Portanto diga-me: {message}

        ";
        var res = await _geminiClient.TextPrompt(bodyMessage);
        
        if(res != null)
            return res.Candidates[0].Content.Parts[0].Text;
        
        return "";
    }
}