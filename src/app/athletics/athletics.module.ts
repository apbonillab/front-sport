import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AthleticsComponent } from './athletics.component';
import { Athletics } from './athletics';
import { AthleticsService } from './athletics.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        AthleticsComponent
    ],
    providers: [AthleticsService],
    bootstrap: [AthleticsComponent]
})
export class AthleticsModule { }