import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  inputValue: string = '';

  todosList: string[] = [];

  addTodo() {
    this.todosList.push(this.inputValue);
    this.inputValue = '';
  }
  removeTodo(i: number) {
    this.todosList = this.todosList.filter((item, index) => index != i);
  }
}
