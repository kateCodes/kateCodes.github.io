import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  yearsInCareer : number = 5;

  constructor() {
    var today = new Date();
    var startDate = new Date(2013, 1, 1, 8, 0, 0, 0);

    this.yearsInCareer = today.getFullYear() - startDate.getFullYear();
  }

  ngOnInit() {
  }

}
