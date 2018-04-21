import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aboutKey: string = 'About'
  resumeKey: string = 'Resumé'
  projectsKey: string = 'Projects'
  selectedContent: string = this.aboutKey;

  title: string = 'app';
  contents: Array<string> = [this.aboutKey, this.resumeKey, this.projectsKey];

  contentClicked = function (content: string): void {

    if (this.selectedContent == content) {
      return;
    }

    this.selectedContent = content;
    // var element = document.getElementById(content);
    // element.scrollIntoView();    
  }
}
