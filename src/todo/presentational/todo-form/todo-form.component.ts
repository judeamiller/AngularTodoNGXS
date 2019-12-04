import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"]
})
export class TodoFormComponent implements OnInit {
  @Output()
  addTodo = new EventEmitter();

  todo = "";

  constructor() {}

  ngOnInit() {}

  submit() {
    this.addTodo.emit(this.todo);
    this.todo = "";
  }
}
