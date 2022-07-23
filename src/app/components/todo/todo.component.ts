import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  lists: string[] = []; //Array.from({length:10},(v,index)=>`Data ${index+1}`);
  listItem = '';

  recentData = '';

  constructor() {}

  ngOnInit(): void {
    this.getStorage();
  }

  // addData(e:any){
  //   let value = e?.target?.value;
  //   if(value){
  //     this.recentData = value;
  //   }
  // }

  addToList() {
    this.lists.unshift(this.listItem);
    this.updateStorage(this.lists);
  }

  deleteItem(index: number) {
    this.lists.splice(index, 1);
    this.updateStorage(this.lists);
  }

  updateStorage(arr: string[]) {
    localStorage.setItem('myTodo', JSON.stringify(arr));
  }

  getStorage(): void {
    try {
      this.lists = JSON.parse(localStorage.getItem('myTodo') as string);
    } catch (e) {}
  }
}
