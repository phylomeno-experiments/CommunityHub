import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IframeSiteComponent } from './iframe-site/iframe-site.component';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes: Routes = [];


@NgModule({
  declarations: [
    AppComponent,
    IframeSiteComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    IframeSiteComponent
  ]
})
export class AppModule { }
