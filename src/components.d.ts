/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Filter,
} from './data/filters';
import {
  Todo,
} from './data/todo';

export namespace Components {
  interface AppFooter {}
  interface AppRoot {}
  interface TodoInput {
    'editTodo'?: boolean;
    'newTodo'?: boolean;
    'saveTodo': any;
    'title': string;
  }
  interface TodoList {}
  interface TodoListFooter {
    'activeTodoCount': number;
    'clearCompleted': () => void;
    'completedTodoCount': number;
    'selectedFilter': Filter;
    'updateFilter': (filter: Filter) => void;
  }
  interface TodoListItem {
    'completeTodo': (id: number) => void;
    'deleteTodo': (id: number) => void;
    'editTodo': (id: number, newTitle: string) => void;
    'todo': Todo;
  }
  interface TodoToggleAll {
    'completeAll': () => void;
    'completedTodoCount': number;
    'incompleteAll': () => void;
    'todoCount': number;
  }
}

declare global {


  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLTodoInputElement extends Components.TodoInput, HTMLStencilElement {}
  var HTMLTodoInputElement: {
    prototype: HTMLTodoInputElement;
    new (): HTMLTodoInputElement;
  };

  interface HTMLTodoListElement extends Components.TodoList, HTMLStencilElement {}
  var HTMLTodoListElement: {
    prototype: HTMLTodoListElement;
    new (): HTMLTodoListElement;
  };

  interface HTMLTodoListFooterElement extends Components.TodoListFooter, HTMLStencilElement {}
  var HTMLTodoListFooterElement: {
    prototype: HTMLTodoListFooterElement;
    new (): HTMLTodoListFooterElement;
  };

  interface HTMLTodoListItemElement extends Components.TodoListItem, HTMLStencilElement {}
  var HTMLTodoListItemElement: {
    prototype: HTMLTodoListItemElement;
    new (): HTMLTodoListItemElement;
  };

  interface HTMLTodoToggleAllElement extends Components.TodoToggleAll, HTMLStencilElement {}
  var HTMLTodoToggleAllElement: {
    prototype: HTMLTodoToggleAllElement;
    new (): HTMLTodoToggleAllElement;
  };
  interface HTMLElementTagNameMap {
    'app-footer': HTMLAppFooterElement;
    'app-root': HTMLAppRootElement;
    'todo-input': HTMLTodoInputElement;
    'todo-list': HTMLTodoListElement;
    'todo-list-footer': HTMLTodoListFooterElement;
    'todo-list-item': HTMLTodoListItemElement;
    'todo-toggle-all': HTMLTodoToggleAllElement;
  }
}

declare namespace LocalJSX {
  interface AppFooter {}
  interface AppRoot {}
  interface TodoInput {
    'editTodo'?: boolean;
    'newTodo'?: boolean;
    'saveTodo'?: any;
    'title'?: string;
  }
  interface TodoList {}
  interface TodoListFooter {
    'activeTodoCount'?: number;
    'clearCompleted'?: () => void;
    'completedTodoCount'?: number;
    'selectedFilter'?: Filter;
    'updateFilter'?: (filter: Filter) => void;
  }
  interface TodoListItem {
    'completeTodo'?: (id: number) => void;
    'deleteTodo'?: (id: number) => void;
    'editTodo'?: (id: number, newTitle: string) => void;
    'todo'?: Todo;
  }
  interface TodoToggleAll {
    'completeAll'?: () => void;
    'completedTodoCount'?: number;
    'incompleteAll'?: () => void;
    'todoCount'?: number;
  }

  interface IntrinsicElements {
    'app-footer': AppFooter;
    'app-root': AppRoot;
    'todo-input': TodoInput;
    'todo-list': TodoList;
    'todo-list-footer': TodoListFooter;
    'todo-list-item': TodoListItem;
    'todo-toggle-all': TodoToggleAll;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-footer': LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'todo-input': LocalJSX.TodoInput & JSXBase.HTMLAttributes<HTMLTodoInputElement>;
      'todo-list': LocalJSX.TodoList & JSXBase.HTMLAttributes<HTMLTodoListElement>;
      'todo-list-footer': LocalJSX.TodoListFooter & JSXBase.HTMLAttributes<HTMLTodoListFooterElement>;
      'todo-list-item': LocalJSX.TodoListItem & JSXBase.HTMLAttributes<HTMLTodoListItemElement>;
      'todo-toggle-all': LocalJSX.TodoToggleAll & JSXBase.HTMLAttributes<HTMLTodoToggleAllElement>;
    }
  }
}


