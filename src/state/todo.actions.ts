import { Todo } from "../model/todo";

export enum TodoActions {
  AddTodo = "[Todo] AddTodo",
  RemoveTodo = "[Todo] RemoveTodo",
  CompleteTodo = "[Todo] CompleteTodo"
}

// Action for adding a to-do to global list
export class AddTodo {
  static readonly type = TodoActions.AddTodo;
  constructor(public text: string) {}
}

// Action for removing a to-do from global list
export class RemoveTodo {
  static readonly type = TodoActions.RemoveTodo;
  constructor(public todo: Todo) {}
}

export class CompleteTodo {
  static readonly type = TodoActions.CompleteTodo;
  constructor(public todo: Todo) {}
}
