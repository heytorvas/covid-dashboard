import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UF } from './uf.model';
import { UfService } from './uf.service';

@Component({
  selector: 'app-uf',
  templateUrl: './uf.component.html',
  styleUrls: ['./uf.component.css']
})
export class UfComponent implements OnInit {

  public uf: UF[];

  selected: string;

  constructor(private ufService: UfService, private router: Router) { }

  ngOnInit(): void {
    this.ufService.getListUF().subscribe((result: UF[]) => {
      this.uf = result;
    })
  }

  btnClicked(): void {
    this.router.navigate([`/dashboard/estados/${this.selected}`])
  }

}
