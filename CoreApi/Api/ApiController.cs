using Microsoft.AspNetCore.Mvc;

namespace CoreApi.Api
{
    [Route("api")]
    public class ApiController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(typeof(void), 200)]
        public IActionResult GetApi() 
        {
            return Ok();
        }
    }
}
