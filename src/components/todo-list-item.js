import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  // onLabelClick = () => {
  //   this.setState(state => {
  //     return {
  //       done: !state.done
  //     };
  //   });
  // };

  // onMarkImportant = () => {
  //   this.setState(state => {
  //     return {
  //       important: !state.important
  //     };
  //   });
  // };

  render() {
    let classNames = "todo-list-item";

    if (this.props.done) {
      classNames += " done";
    }
    if (this.props.important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.props.onToggleDone}>
          {this.props.label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.props.onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={this.props.onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
