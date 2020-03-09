import { Component, State, h } from "@stencil/core";
import TodoTunnel, { Todo } from "../../data/todo";

@Component({
  tag: "app-root"
})
export class AppRoot {
  @State() todos: Todo[] = [];

  addTodo(title: string) {
    this.todos.push({
      title,
      completed: false
    });
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

        <footer class="info">
          <p>Double-click to edit a todo</p>
          <p>
            Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
          </p>
          <p>
            Created by <a href="http://todomvc.com">you</a>
          </p>
          <p>
            Part of <a href="http://todomvc.com">TodoMVC</a>
          </p>
        </footer>
      </TodoTunnel.Provider>
    );
  }
}
