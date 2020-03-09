import { Component, State, h, Prop } from "@stencil/core";

@Component({
  tag: "todo-input"
})
export class TodoInput {
  @State() text: string = "";

  @Prop() addTodo: (title: string) => {};

  handleKeyUp(event) {
    this.text = event.target.value;

    if (event.which === 13) {
      this.addTodoTask();
    }
  }

  handleBlur() {
    if (this.text !== "") {
      this.addTodoTask();
    }
  }

  private addTodoTask() {
    this.addTodo(this.text);
  }

  render() {
    return (
      <input
        class="new-todo"
        type="text"
        placeholder="What needs to be done?"
        value={this.text}
        onKeyUp={this.handleKeyUp.bind(this)}
        onBlur={this.handleBlur.bind(this)}
      />
    );
  }
}
