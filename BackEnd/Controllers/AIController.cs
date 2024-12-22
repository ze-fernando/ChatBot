using Microsoft.AspNetCore.Mvc;
using ChatBot.Services;

namespace ChatBot.Controllers;

[ApiController]
[Route("api")]
public class AIController(AIService service) : ControllerBase
{
    private readonly AIService _service = service;

    [HttpGet("ai")]
    public async Task<IActionResult> TalkToIaAsync([FromQuery] string message)
    {
        var response = await _service.SendAIAsync(message);
        return Ok(new {data = response});
    }
}
