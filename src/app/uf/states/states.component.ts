
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatesService } from './states.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  public stateCovid: any;

  constructor(private stateService: StatesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.stateService.getStatesData(this.route.snapshot.params.id).subscribe((result) => {
      this.stateCovid = result;
    })
  }

}
