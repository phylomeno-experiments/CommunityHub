using System.Collections.Generic;

namespace CoreApi.Sites
{
    public class PluginSitesRepository
    {
        private readonly List<PluginSite> _pluginSites = new List<PluginSite>();

        public IEnumerable<PluginSite> GetPluginSites()
        {
            return _pluginSites;
        }
        public void RegisterPluginSite(PluginSite pluginSite)
        {
            _pluginSites.Add(pluginSite);
        }
    }
}
