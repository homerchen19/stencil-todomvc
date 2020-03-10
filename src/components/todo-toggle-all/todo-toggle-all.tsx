import { Component, Prop, h } from "@stencil/core";
import { Todo } from "../../data/todo";

@Component({
  tag: "todo-toggle-all"
})
export class TodoToggleAll {
  @Prop() todos: Todo[];
  @Prop() completeAll: () => void;
  @Prop() incompleteAll: () => void;

  handleClick(completedCount) {
    if (completedCount === this.todos.length) {
      this.incompleteAll();
    } else {
      this.completeAll();
    }
  }

  render() {
    const completedCount = this.todos.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    );

    return this.todos.length > 0 ? (
      <div>
        <input
          class="toggle-all"
          type="checkbox"
          checked={completedCount === this.todos.length}
        />
        <label
          htmlFor="toggle-all"
          onClick={this.handleClick.bind(this, completedCount)}
        >
          Mark all as complete
        </label>
      </div>
    ) : null;
  }
}
