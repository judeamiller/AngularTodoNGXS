import { Component, OnInit } from "@angular/core";

import { Select, Store } from "@ngxs/store";
import TodoState from "../../../state/todo.state";
import { Observable } from "rxjs";
import { Todo } from "../../../model/todo";
import { AddTodo, CompleteTodo, RemoveTodo } from "../../../state/todo.actions";

@Component({
  selector: "app-todo-component",
  templateUrl: "./todo-component.component.html",
  styleUrls: ["./todo-component.component.scss"]
})
export class TodoComponentComponent implements OnInit {
  @Select(TodoState.getTodos) todos$: Observable<Todo[]>;
  todos: Todo[] = [];

  constructor(private store: Store) {
    this.todos$.subscribe(todos => {
      this.todos = todos;
    });
  }

  ngOnInit() {}

  addTodo(todo: string) {
    this.store.dispatch(new AddTodo(todo));
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(new RemoveTodo(todo));
  }

  completeTodo(todo: Todo) {
    this.store.dispatch(new CompleteTodo(todo));
  }
}
