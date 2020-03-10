import { Component, Prop, h } from '@stencil/core';
import classnames from 'classnames';
import Filter from '../../data/filters';

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
        <ul class="filters">
          {[Filter.SHOW_ALL, Filter.SHOW_ACTIVE, Filter.SHOW_COMPLETED].map(
            filter => (
              <li key={filter}>{this.renderFilterLink(filter)}</li>
            )
          )}
        </ul>
      </footer>
    );
  }
}
