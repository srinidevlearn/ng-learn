import { Component, OnInit } from '@angular/core';
import { routeLabel } from 'src/app/app-routing.module';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {
  routeLabel = routeLabel;
  constructor() { }

  ngOnInit(): void {
  }

}
