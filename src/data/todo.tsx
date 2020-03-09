import { h } from "@stencil/core";
import { createProviderConsumer } from "@stencil/state-tunnel";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface State {
  todos: Todo[];
  editTodo: (id: number, newTitle: string) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

export default createProviderConsumer<State>(
  {
    todos: [],
    editTodo: () => {},
    deleteTodo: () => {},
    completeTodo: () => {}
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);
