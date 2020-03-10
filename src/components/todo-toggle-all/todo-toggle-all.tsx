import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'todo-toggle-all'
})
export class TodoToggleAll {
  @Prop() todoCount: number;
  @Prop() completedTodoCount: number;
  @Prop() completeAll: () => void;
  @Prop() incompleteAll: () => void;

  handleClick() {
    if (this.completedTodoCount === this.todoCount) {
      this.incompleteAll();
    } else {
      this.completeAll();
    }
  }

  render() {
    return this.todoCount > 0 ? (
      <div>
        <input
          class="toggle-all"
          type="checkbox"
          checked={this.completedTodoCount === this.todoCount}
        />
        <label htmlFor="toggle-all" onClick={this.handleClick.bind(this)}>
          Mark all as complete
        </label>
      </div>
    ) : null;
  }
}
