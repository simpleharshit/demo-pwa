import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/AppComponent/app.component';
import { HeaderComponent } from './components/HeaderComponent/header.component';
import { NavbarComponent } from './components/NavBarComponent/nav-bar.component';
import { HomeComponent } from './components/HomeComponent/home.component';
import { MediaListComponent } from './components/MediaListComponent/media-list.component';
import { RouteComponent } from './components/RouteComponent/route.component';
import { FooterComponent } from './components/FooterComponent/footer.component';

import { AppHelper } from './global-services/app.helper';
import { LoggerService } from './global-services/logger.service';

import { AppRoutingModule, routedComponents } from './app-routing.module';

import { LocalizePipe } from './global-components/LocalizeComponent/localize.pipe';
import { LocalizeService } from './global-components/LocalizeComponent/localize.service';
import { LocalizeProvider } from './global-components/LocalizeComponent/localize-provider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    MediaListComponent,
    RouteComponent,    
    FooterComponent,
    LocalizePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LocalizeProvider,
    LocalizeService,
    LoggerService,
    AppHelper
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
  
}