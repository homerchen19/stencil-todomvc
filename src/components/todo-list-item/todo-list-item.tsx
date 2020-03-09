import { Component, State, Prop, h } from "@stencil/core";
import classnames from "classnames";
import { Todo } from "../../data/todo";

@Component({
  tag: "todo-list-item"
})
export class TodoListItem {
  @State() isEditing: boolean = false;

  @Prop() todo: Todo;
  @Prop() editTodo: (id: number, newTitle: string) => void;
  @Prop() deleteTodo: (id: number) => void;
  @Prop() completeTodo: (id: number) => void;

  handleSaveTodo(id: number, newTitle: string) {
    this.editTodo(id, newTitle);
    this.isEditing = false;
  }

  render() {
    const { id, title, completed } = this.todo;

    return (
      <li
        class={classnames({
          completed,
          editing: this.isEditing
        })}
      >
        {this.isEditing ? (
          <todo-input
            title={title}
            saveTodo={this.handleSaveTodo.bind(this, id)}
            editTodo
          />
        ) : (
          <div class="view">
            <input
              class="toggle"
              type="checkbox"
              checked={completed}
              onChange={this.completeTodo.bind(this, id)}
            />
            <label
              onDblClick={() => {
                this.isEditing = true;
              }}
            >
              {title}
            </label>
            <button class="destroy" onClick={() => this.deleteTodo(id)} />
          </div>
        )}
      </li>
    );
  }
}
