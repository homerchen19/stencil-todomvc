import { h } from "@stencil/core";
import { createProviderConsumer } from "@stencil/state-tunnel";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface State {
  todos: Todo[];
}

export default createProviderConsumer<State>(
  {
    todos: []
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);
