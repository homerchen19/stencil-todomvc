import { Component, State, h } from "@stencil/core";
import TodoTunnel, { Todo } from "../../data/todo";

@Component({
  tag: "app-root"
})
export class AppRoot {
  @State() todos: Todo[] = [];

  addTodo(title: string) {
    this.todos.unshift({
      id: this.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      title,
      completed: false
    });
  }

  delete(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  edit(id, text) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, text } : todo
    );
  }

  complete(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  completeAll() {
    this.todos = this.todos.map(todo => ({ ...todo, completed: true }));
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => todo.completed === false);
  }

  render() {
    return (
      <TodoTunnel.Provider state={{ todos: this.todos }}>
        <section class="todoapp">
          <header class="header">
            <h1>todos</h1>
            <todo-input addTodo={this.addTodo.bind(this)} />
          </header>

          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route url="/profile/:name" component="app-profile" />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </section>

        <app-footer />
      </TodoTunnel.Provider>
    );
  }
}
