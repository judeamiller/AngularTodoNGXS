import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "../../../model/todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  @Input()
  todoList: Todo[] = [];

  @Output()
  completeTodo = new EventEmitter();

  @Output()
  removeTodo = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
