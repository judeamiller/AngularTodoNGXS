import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";

import { AppComponent } from "./app.component";
import { TodoComponentComponent } from "../todo/stateful/todo-component/todo-component.component";
import { TodoItemComponent } from "../todo/presentational/todo-item/todo-item.component";
import { TodoListComponent } from "../todo/presentational/todo-list/todo-list.component";
import { TodoFormComponent } from "../todo/presentational/todo-form/todo-form.component";

import { FormsModule } from "@angular/forms";
import TodoState from "src/state/todo.state";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    NgxsModule.forRoot([TodoState]),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
