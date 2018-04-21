import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  yearsOfExperience: number = 5;

  constructor() { 

    var today = new Date();
    var startDate = new Date(2013, 1, 1, 8, 0, 0, 0);

    this.yearsOfExperience = today.getFullYear() - startDate.getFullYear();


  }

  ngOnInit() {
  }

}
