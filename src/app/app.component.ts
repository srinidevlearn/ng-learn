import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fadeIn.animation';
import { routeLabel } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[fadeAnimation]
})
export class AppComponent {
  title = 'vel-ng-learn';
  routeLabel = routeLabel;
  constructor(){
   console.log(Object.fromEntries([[1,1],[2,2]]))
  }
}
