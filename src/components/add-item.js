import React, { Component } from "react";
import "./add-item.css";

export default class AddItem extends Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label : e.target.value
    })  
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label : ''
    })
  }
  render() {
    return (
      <div className="input-group add-item">
        <form className="form-row align-items-center"
              onSubmit={this.onSubmit}>
          <input
            type="text"
            className="add-input form-control"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={this.state.label}
          />
          <button
            type="button"
            className="btn btn-outline-success btn-sm after"
            onClick={this.onSubmit}
          >
            <i className="fa fa-plus" />
          </button>
        </form>
      </div>
    );
  }
}
