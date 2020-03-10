import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-footer'
})
export class AppFooter {
  render() {
    return (
      <footer class="info">
        <p>Double-click to edit a todo</p>
        <p>
          Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
        </p>
        <p>
          Created by <a href="https://github.com/xxhomey19">xxhomey19</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    );
  }
}
