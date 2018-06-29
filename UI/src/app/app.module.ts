import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IframeSiteComponent } from './iframe-site/iframe-site.component';

const appRoutes: Routes = [
  { path: 'iframe-site', component: IframeSiteComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    IframeSiteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
