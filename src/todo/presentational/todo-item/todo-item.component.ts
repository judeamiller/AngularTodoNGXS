import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "../../../model/todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  selectTodo = new EventEmitter();

  @Output()
  removeTodo = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
