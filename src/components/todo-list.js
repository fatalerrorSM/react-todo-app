import React from "react";
import TodoListItem from "./todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todos.map(item => {
    // const { id , ...itemProps } = item; Alternative
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem
          label={item.label}
          important={item.important}
          done={item.done}
          onDeleted={() => onDeleted(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
          onToggleImportant={() => onToggleImportant(item.id)}
        />
        {/* <TodoListItem {...itemProps} /> Alternative */}
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
