import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddTodo, CompleteTodo, RemoveTodo } from "./todo.actions";
import { TodoStateModel } from "../model/todo-state-model";

@State<TodoStateModel>({
  name: "todos",
  defaults: {
    todoList: [
      {
        id: 0,
        text: "Write Tutorial",
        completed: false
      },
      {
        id: 1,
        text: "Finish Code",
        completed: true
      }
    ]
  }
})
export default class TodoState {
  constructor() {}

  // Selector to make todos easily acceptable in Components. Used in components via Select
  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todoList;
  }

  // Respond to the Add Todo Action
  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState();
    const todoList = state.todoList;
    todoList.push({
      id: todoList.length,
      text: action.text,
      completed: false
    });

    // Set the state to a new state object that has the original properties (...state) and an overwritten array of todos
    ctx.setState({
      ...state,
      todoList
    });
  }

  // Respond to the Remove Todo Action
  @Action(RemoveTodo)
  removeTodo(ctx: StateContext<TodoStateModel>, action: RemoveTodo) {
    const state = ctx.getState();
    const todoList = state.todoList;
    // Remove the first todo that has the same id as the one dispatched in the action

    // get the index of the todo
    const index = todoList.findIndex(todo => todo.id === action.todo.id);
    // remove the appropriate todo
    todoList.splice(index, 1);

    // Set the state to a new state object that has the original properties (...state) and an overwritten array of todos
    ctx.setState({
      ...state,
      todoList
    });
  }

  // Respond to the Complete Todo Action
  @Action(CompleteTodo)
  completeTodo(ctx: StateContext<TodoStateModel>, action: CompleteTodo) {
    action.todo.completed = true;
  }
}
