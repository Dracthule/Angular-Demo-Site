import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { VideosComponent } from './main/videos/videos.component';
import { WhyAngularComponent } from './main/why-angular/why-angular.component';
import { AboutComponent } from './main/about/about.component';
import { StoreComponent } from './main/store/store.component';
import { SocialComponent } from './main/social/social.component';
import { MiscComponent } from './main/misc/misc.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CategoriesComponent,
    VideosComponent,
    WhyAngularComponent,
    AboutComponent,
    StoreComponent,
    SocialComponent,
    MiscComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
