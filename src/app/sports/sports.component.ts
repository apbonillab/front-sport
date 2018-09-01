import { Component, OnInit } from '@angular/core';
import { SportsServices } from './sports.service';
import { Sport } from './sport';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private sportService:SportsServices) { }
  sports: Sport[];
  getListSport():void{
    this.sportService.getAllSport().subscribe(sports => this.sports = sports);
  }
  ngOnInit() {
    this.getListSport();
  }

}
