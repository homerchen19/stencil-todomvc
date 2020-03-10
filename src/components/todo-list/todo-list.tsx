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
        {({
          todos,
          deleteTodo,
          editTodo,
          completeTodo,
          completeAllTodo,
          incompleteAllTodo
        }) => {
          const filteredTodos = todos.filter(TODO_FILTERS[this.filter]);

          return (
            <section class="main">
              <todo-toggle-all
                todos={todos}
                completeAll={completeAllTodo}
                incompleteAll={incompleteAllTodo}
              />
              <ul class="todo-list">
                {filteredTodos.map(todo => (
                  <todo-list-item
                    todo={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    completeTodo={completeTodo}
                  />
                ))}
              </ul>
            </section>
          );
        }}
      </TodoTunnel.Consumer>
    );
  }
}
