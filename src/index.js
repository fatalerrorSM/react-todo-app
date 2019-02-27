import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import AddItem from "./components/add-item";
import "./index.css";
import ItemStatusFilter from "./components/item-status-filter";

class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", done: true, important: false, id: 1 },
      { label: "Build React App", done: false, important: true, id: 2 },
      { label: "Have a lunch", done: false, important: false, id: 3 }
    ],
    term: "",
    filter: {}
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];
      return {
        todoData: newArray
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important };

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, newItem, ...after];

      return {
        todoData: newArray
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, newItem, ...after];

      return {
        todoData: newArray
      };
    });
  };

  addItem = text => {
    this.setState(({ todoData }) => {
      const id = todoData.length + 1;

      const itemToAdd = {
        label: text,
        important: false,
        done: false,
        id: id
      };

      const newArray = [...todoData, itemToAdd];

      return {
        todoData: newArray
      };
    });
  };

  onTermChange = text => {
    this.setState({
      term: text
    });
  };

  onFilterChange = filter => {
    this.setState({
      filter: filter
    });
    console.log(this.state.filter);
  };

  filterItems = (items, filter = {}) => {
    if (this.state.filter.done) {
      return items.filter(item => {
        return item.done === filter.done;
      });
    } else if (this.state.filter.important) {
      return items.filter(item => {
        return item.important === filter.important;
      });
    } else {
      return items;
    }
  };

  searchItems = (items, term) => {
    if (term === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  render() {
    let visibleItems = this.searchItems(this.state.todoData, this.state.term);
    visibleItems = this.filterItems(visibleItems, this.state.filter);
    const doneCount = this.state.todoData.filter(el => el.done === true).length;
    const toDOCount = this.state.todoData.filter(el => el.done !== true).length;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDOCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onTermChange={this.onTermChange} />
          <ItemStatusFilter onFilterChange={this.onFilterChange} />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddItem onAdd={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
