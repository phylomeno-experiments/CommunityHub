import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IframeSiteComponent } from '../iframe-site/iframe-site.component';
import { HttpClient } from '@angular/common/http';
import { PluginSite } from './plugin-site';
import { PluginSiteService } from './plugin-site-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  links: Array<{ text: string, path: string }> = [];

  constructor(private router: Router, pluginSiteService: PluginSiteService) {
    pluginSiteService.getPluginSites().subscribe(
      (data: PluginSite[]) => data.forEach(site => { this.addIframeSite(site.name, site.url); }));
  }

  ngOnInit() {
  }

  addIframeSite(text: string, url: string) {
    const path = text.replace(' ', '-');
    this.links.push(
      { text: text, path: path }
    );
    this.router.config.unshift(
      { path: path, component: IframeSiteComponent, data: { url: url } }
    );
  }
}
