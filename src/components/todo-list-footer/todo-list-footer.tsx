import { Component, Prop, h } from '@stencil/core';
import classnames from 'classnames';
import { Filter } from '../../data/filters';

const FILTER_TITLES = {
  [Filter.SHOW_ALL]: 'All',
  [Filter.SHOW_ACTIVE]: 'Active',
  [Filter.SHOW_COMPLETED]: 'Completed'
};

@Component({
  tag: 'todo-list-footer'
})
export class TodoListFooter {
  @Prop() selectedFilter: Filter;
  @Prop() activeTodoCount: number;
  @Prop() completedTodoCount: number;
  @Prop() clearCompleted: () => void;
  @Prop() updateFilter: (filter: Filter) => void;

  renderTodoCount() {
    const itemWord = this.activeTodoCount === 1 ? 'item' : 'items';

    return (
      <span class="todo-count">
        <strong>{this.activeTodoCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];

    return (
      <a
        class={classnames({ selected: filter === this.selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          this.updateFilter(filter);
        }}
      >
        {title}
      </a>
    );
  }

  render() {
    return (
      <footer class="footer">
        {this.renderTodoCount()}
        <ul class="filters">
          {[Filter.SHOW_ALL, Filter.SHOW_ACTIVE, Filter.SHOW_COMPLETED].map(
            filter => (
              <li>{this.renderFilterLink(filter)}</li>
            )
          )}
        </ul>
        {this.completedTodoCount > 0 && (
          <button class="clear-completed" onClick={this.clearCompleted}>
            Clear completed
          </button>
        )}
      </footer>
    );
  }
}
