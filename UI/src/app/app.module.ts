import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IframeSiteComponent } from './iframe-site/iframe-site.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PluginSiteService } from './navigation/plugin-site-service.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [];


@NgModule({
  declarations: [
    AppComponent,
    IframeSiteComponent,
    NavigationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    PluginSiteService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    IframeSiteComponent
  ]
})
export class AppModule { }
