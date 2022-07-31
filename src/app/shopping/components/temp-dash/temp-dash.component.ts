import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-dash',
  templateUrl: './temp-dash.component.html',
  styleUrls: ['./temp-dash.component.scss'],
})
export class TempDashComponent implements OnInit {
  cards = ['menu', 'product_inventory', 'cart_items'];

  UIcards = this.cards.map((i) => ({
    label: i.split('_').length <= 2 ? i.split('_').join(' ') : i,
    routing: `/shopping/${i}`,
  }));

  constructor() {}

  ngOnInit(): void {}
}
