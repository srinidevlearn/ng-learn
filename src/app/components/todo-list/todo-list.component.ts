import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

interface ToDo {
  task: string;
  time: number;
  isCompleted: boolean;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit,OnChanges {
  @Input() lists: ToDo[] = [];
  @Input()   sortBy: 'create' | 'complete' |null=null;

  @Output() makCompleteEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {}

  markCompleteAction(item:ToDo) {
    this.makCompleteEvent.emit(item)
  }
  deleteItemAction(item:ToDo) {
    this.deleteEvent.emit(item)
  }
}
