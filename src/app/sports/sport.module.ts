import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SportsComponent } from './sports.component';
import { Sport } from './sport';
import { SportsServices } from './sports.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        SportsComponent
    ],
    providers: [SportsServices],
    bootstrap: [SportsComponent]
})
export class SportsModule { }