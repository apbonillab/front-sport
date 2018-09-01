import { Component, OnInit } from '@angular/core';
import { AthleticsService } from './athletics.service';
import { Athletics } from './athletics';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-athletics',
  templateUrl: './athletics.component.html',
  styleUrls: ['./athletics.component.css']
})
export class AthleticsComponent implements OnInit {

  constructor(private athleticService:AthleticsService) { }
  athletics: Athletics[];

  getListAthletics():void{
    this.athleticService.getAllAthletics().subscribe(athletics => this.athletics = athletics);
  }
  ngOnInit() {
    this.getListAthletics();
  }

}
