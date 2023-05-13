import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ThemeButtonComponent } from './theme-button/theme-button.component';
import { PublicBondsComponent } from './public-bonds/public-bonds.component';
import { PublicBondsDetailsComponent } from './public-bonds/public-bonds-details/public-bonds-details.component';
import { PublicBondsListComponent } from './public-bonds/public-bonds-list/public-bonds-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,
    ThemeButtonComponent,
    PublicBondsComponent,
    PublicBondsDetailsComponent,
    PublicBondsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
