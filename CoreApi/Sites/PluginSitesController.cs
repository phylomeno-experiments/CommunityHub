using Microsoft.AspNetCore.Mvc;

namespace CoreApi.Sites
{
    [Route("api/plugin-sites")]
    public class PluginSitesController : ControllerBase
    {
        private readonly PluginSitesRepository _siteRepository;

        public PluginSitesController(PluginSitesRepository siteRepository)
        {
            _siteRepository = siteRepository;
        }

        [HttpGet]
        [ProducesResponseType(typeof(PluginSite[]), 200)]
        public IActionResult GetPluginSites() => new OkObjectResult(_siteRepository.GetPluginSites());

        [HttpPost]
        public IActionResult PostPluginSite(PluginSite site)
        {
            _siteRepository.RegisterPluginSite(site);
            return new OkResult();
        }
    }
}
