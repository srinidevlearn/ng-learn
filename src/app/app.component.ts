import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vel-ng-learn';

  constructor(){
   console.log(Object.fromEntries([[1,1],[2,2]]))
  }
}
