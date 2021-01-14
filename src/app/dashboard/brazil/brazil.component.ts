import { Component, OnInit } from '@angular/core';

import { BrazilService } from './brazil.service';

import { Brazil, Data } from './brazil.model';

@Component({
  selector: 'app-brazil',
  templateUrl: './brazil.component.html',
  styleUrls: ['./brazil.component.css']
})
export class BrazilComponent implements OnInit {

  data: Data;

  constructor(private brazilService: BrazilService) { }

  ngOnInit(): void {
    this.brazilService.getBrazilData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
  }

}
