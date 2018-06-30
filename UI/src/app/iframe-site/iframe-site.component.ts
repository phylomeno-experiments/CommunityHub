import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-site',
  templateUrl: './iframe-site.component.html',
  styleUrls: ['./iframe-site.component.css']
})
export class IframeSiteComponent implements OnInit {
  private url: string;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.url = data.url);
  }

  getUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
