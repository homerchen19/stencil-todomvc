/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface TodoInput {
    'addTodo': (title: string) => {};
  }
}

declare global {


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
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'todo-input': HTMLTodoInputElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface TodoInput {
    'addTodo'?: (title: string) => {};
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'todo-input': TodoInput;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'todo-input': LocalJSX.TodoInput & JSXBase.HTMLAttributes<HTMLTodoInputElement>;
    }
  }
}


