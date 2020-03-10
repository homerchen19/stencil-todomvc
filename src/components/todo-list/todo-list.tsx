import { Component, State, h } from '@stencil/core';
import TodoTunnel, { Todo } from '../../data/todo';
import { Filter } from '../../data/filters';

const TODO_FILTERS = {
  [Filter.SHOW_ALL]: () => true,
  [Filter.SHOW_COMPLETED]: (todo: Todo) => todo.completed,
  [Filter.SHOW_ACTIVE]: (todo: Todo) => !todo.completed
};

@Component({
  tag: 'todo-list'
})
export class TodoList {
  @State() filter: Filter = Filter.SHOW_ALL;

  handleUpdateFilter(filter: Filter) {
    this.filter = filter;
  }

  render() {
    return (
      <TodoTunnel.Consumer>
        {({
          todos,
          deleteTodo,
          editTodo,
          completeTodo,
          completeAllTodo,
          incompleteAllTodo,
          clearCompletedTodo
        }) => {
          const filteredTodos = todos.filter(TODO_FILTERS[this.filter]);
          const todoCount: number = todos.length;
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
              {todoCount !== 0 && (
                <todo-list-footer
                  selectedFilter={this.filter}
                  completedTodoCount={completedTodoCount}
                  activeTodoCount={todoCount - completedTodoCount}
                  clearCompleted={clearCompletedTodo}
                  updateFilter={this.handleUpdateFilter.bind(this)}
                />
              )}
            </section>
          );
        }}
      </TodoTunnel.Consumer>
    );
  }
}
