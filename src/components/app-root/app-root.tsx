import { Component, State, h } from "@stencil/core";
import TodoTunnel, { Todo } from "../../data/todo";

@Component({
  tag: "app-root"
})
export class AppRoot {
  @State() todos: Todo[] = [];

  add(title: string) {
    this.todos = [
      {
        id:
          this.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        title,
        completed: false
      },
      ...this.todos
    ];
  }

  delete(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  edit(id: number, title: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, title } : todo
    );
  }

  complete(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  completeAll() {
    this.todos = this.todos.map(todo => ({ ...todo, completed: true }));
  }

  incompleteAll() {
    this.todos = this.todos.map(todo => ({ ...todo, completed: false }));
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => todo.completed === false);
  }

  render() {
    return (
      <TodoTunnel.Provider
        state={{
          todos: this.todos,
          editTodo: this.edit.bind(this),
          deleteTodo: this.delete.bind(this),
          completeTodo: this.complete.bind(this),
          completeAllTodo: this.completeAll.bind(this),
          incompleteAllTodo: this.incompleteAll.bind(this)
        }}
      >
        <section class="todoapp">
          <header class="header">
            <h1>todos</h1>
            <todo-input saveTodo={this.add.bind(this)} newTodo />
          </header>

          <main>
            <todo-list />
          </main>
        </section>

        <app-footer />
      </TodoTunnel.Provider>
    );
  }
}
