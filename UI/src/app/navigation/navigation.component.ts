import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IframeSiteComponent } from '../iframe-site/iframe-site.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  links: Array<{ text: string, path: string }> = [];

  constructor(private router: Router) {
    this.addIframeSite('Mmo junks', 'https://mmojunkies.net');
    this.addIframeSite('Oxi', 'https://oxi.ch/');
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
