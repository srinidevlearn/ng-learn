import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/service/to-do.service';

interface ToDo {
  task: string;
  time: number;
  isCompleted: boolean;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  listItem = '';
  sortBy: 'create' | 'complete' | null = null;
  recentData = '';

  constructor(public service: ToDoService) {}

  ngOnInit(): void {
    this.service.getStorage();
  }



  addToList() {
    let todoData: ToDo = {
      task: this.listItem,
      time: Date.now(),
      isCompleted: false,
    };
    this.service.addToList(todoData);
    this.listItem = '';
    this.sortBy = null;
  }

  markComplete(targetItem: ToDo) {
    this.service.markCompleteToList(targetItem);
  }

  deleteItem(targetItem: ToDo) {
    this.service.deletItemFromList(targetItem);
  }

  sortByComplete() {
    this.sortBy = 'complete';
  }
  sortByCreate() {
    this.sortBy = 'create';
  }
}
