import { Component, State, h } from "@stencil/core";
import TodoTunnel, { Todo } from "../../data/todo";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../../data/filters";

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: (todo: Todo) => !todo.completed,
  [SHOW_ACTIVE]: (todo: Todo) => todo.completed
};

@Component({
  tag: "todo-list"
})
export class TodoList {
  @State() filter: keyof typeof TODO_FILTERS = SHOW_ALL;

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
          const todoCount: number = todos.length;
          const filteredTodos = todos.filter(TODO_FILTERS[this.filter]);
          const completedTodoCount = todos.reduce(
            (count, todo) => (todo.completed ? count + 1 : count),
            0
          );

          return (
            <section class="main">
              <todo-toggle-all
                todoCount={todoCount}
                completedTodoCount={completedTodoCount}
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
