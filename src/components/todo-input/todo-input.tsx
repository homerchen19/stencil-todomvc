import { Component, State, Event, EventEmitter, h } from "@stencil/core";

@Component({
  tag: "todo-input"
})
export class TodoInput {
  @Event() addTodo: EventEmitter;

  @State() text: string = "";

  handleKeyUp(event) {
    this.text = event.target.value;

    if (event.which === 13) {
      this.emitAddTodo();
    }
  }

  handleBlur() {
    if (this.text !== "") {
      this.emitAddTodo();
    }
  }

  private emitAddTodo() {
    console.log(this.text);
    this.addTodo.emit(this.text);
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
