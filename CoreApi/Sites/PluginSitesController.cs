using Microsoft.AspNetCore.Mvc;

namespace CoreApi.Sites
{
    [Route("api/[controller]")]
    public class PluginSitesController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(typeof(PluginSite[]), 200)]
        public IActionResult Get() => new OkObjectResult(new[] {
            new PluginSite { Name = "Oxi", Url = "https://oxi.ch" },
            new PluginSite { Name = "Mmo Junkies", Url = "https://mmojunkies.net" }
        });
    }
}
