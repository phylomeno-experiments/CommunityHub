using Microsoft.AspNetCore.Mvc;

namespace CoreApi.Sites
{
    [Route("api/[controller]")]
    public class SitesController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return new OkObjectResult(new[] { "Twitter", "YouTube" });
        }
    }
}
