import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-new';

  data = 'x'
  message:string = 'parent to child communication'
  constructor() {

  }

  updateData(items:string){
      console.log(items)
      this.data= items;
  }
}

