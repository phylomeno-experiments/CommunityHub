import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PluginSite } from './plugin-site';

@Injectable()
export class PluginSiteService {
  pluginSiteUrl = 'http://localhost:5000/api/plugin-sites';

  constructor(private http: HttpClient) { }

  getPluginSites() {
    return this.http.get<PluginSite[]>(this.pluginSiteUrl);
  }

}
