import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { AppComponent } from './app.component';
import { SportsComponent } from './sports/sports.component';
import { AthleticsComponent } from './athletics/athletics.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AthleticsModule } from './athletics/athletics.module';
import { SportsModule } from './sports/sport.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AthleticsModule,
    SportsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
