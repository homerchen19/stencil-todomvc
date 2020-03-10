import { Component, h, Prop } from "@stencil/core";
import classnames from "classnames";

@Component({
  tag: "todo-input"
})
export class TodoInput {
  @Prop({
    mutable: true
  })
  title: string = "";
  @Prop() editTodo?: boolean = false;
  @Prop() newTodo?: boolean = false;
  @Prop() saveTodo;

  handleKeyUp(event) {
    this.title = event.target.value;

    if (event.which === 13) {
      this.saveTodoTask();
    }
  }

  handleBlur() {
    if (this.title !== "" && this.editTodo) {
      this.saveTodoTask();
    }
  }

  private saveTodoTask() {
    this.saveTodo(this.title);

    if (this.newTodo) {
      this.title = "";
    }
  }

  render() {
    return (
      <input
        class={classnames({
          edit: this.editTodo,
          "new-todo": this.newTodo
        })}
        placeholder="What needs to be done?"
        type="text"
        value={this.title}
        onKeyUp={this.handleKeyUp.bind(this)}
        onBlur={this.handleBlur.bind(this)}
      />
    );
  }
}
