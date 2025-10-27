using LanguageAppApi.Storage;
using Microsoft.AspNetCore.Mvc;

namespace LanguageAppApi.Controllers;


[ApiController]
[Route("[controller]")]

public class WordPairsController : ControllerBase
{
    private readonly WordPairsStorage _wordPairsStorage;
    public WordPairsController(WordPairsStorage wordPairsStorage)
    {
        _wordPairsStorage = wordPairsStorage;
    }
    [HttpGet]
    public IActionResult GetWordPairs()
    {
        return Ok(_wordPairsStorage.GetWordPairs());
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteWordPairs()
    {
        var ids = await HttpContext.Request.ReadFromJsonAsync<List<int>>();
        _wordPairsStorage.DeleteWordPairs(ids);
        return Ok(new { deletedIds = ids });
    }
}
