import { Component, OnInit } from '@angular/core';
import { BrazilService } from './brazil.service';

@Component({
  selector: 'app-brazil',
  templateUrl: './brazil.component.html',
  styleUrls: ['./brazil.component.css']
})
export class BrazilComponent implements OnInit {

  public brazilCovid: any;

  constructor(private brazilService: BrazilService) { }

  ngOnInit(): void {
    this.brazilService.getBrazilData().subscribe((result) => {
      this.brazilCovid = result.data;
    })
  }

}
