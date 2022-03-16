import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GearlistComponent } from './gearlist/gearlist.component';
import { RaidP1sComponent } from './raid-p1s/raid-p1s.component';
import { RaidP2sComponent } from './raid-p2s/raid-p2s.component';
import { RaidP3sComponent } from './raid-p3s/raid-p3s.component';
import { RaidP4sP1Component } from './raid-p4s-p1/raid-p4s-p1.component';
import { RaidP4sP2Component } from './raid-p4s-p2/raid-p4s-p2.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    GearlistComponent,
    RaidP1sComponent,
    RaidP2sComponent,
    RaidP3sComponent,
    RaidP4sP1Component,
    RaidP4sP2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
