import { Component, State, h } from "@stencil/core";
import TodoTunnel, { Todo } from "../../data/todo";

const TODO_FILTERS = {
  all: () => true,
  active: (todo: Todo) => !todo.completed,
  completed: (todo: Todo) => todo.completed
};

@Component({
  tag: "todo-list"
})
export class TodoList {
  @State() filter: keyof typeof TODO_FILTERS = "all";

  render() {
    return (
      <TodoTunnel.Consumer>
        {({ todos }: { todos: Todo[] }) => {
          const filteredTodos = todos.filter(TODO_FILTERS[this.filter]);
          const completedCount = todos.reduce(
            (count, todo) => (todo.completed ? count + 1 : count),
            0
          );

          return (
            <section class="main">
              <ul class="todo-list">
                {filteredTodos.map(todo => (
                  <todo-list-item todo={todo} />
                ))}
              </ul>
            </section>
          );
        }}
      </TodoTunnel.Consumer>
    );
  }
}
