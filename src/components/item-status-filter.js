import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  state = {
    All: true,
    Important: false,
    Done: false
  };

  onAll = () => {
    if (!this.state.All) {
      this.setState({
        All: !this.state.All,
        Important: this.state.Important
          ? !this.state.Important
          : this.state.Important,
        Done: this.state.Done ? !this.state.Done : this.state.Done
      });
    this.props.onFilterChange({all : !this.state.All});
    }
  };

  onImportant = () => {
    if (!this.state.Important) {
      this.setState({
        All: this.state.All ? !this.state.All : this.state.All,
        Important: !this.state.Important,
        Done: this.state.Done ? !this.state.Done : this.state.Done
      });
      this.props.onFilterChange({important : !this.state.Important});
    }
  };

  onDone = () => {
    if (!this.state.Done) {
      this.setState({
        All: this.state.All ? !this.state.All : this.state.All,
        Important: this.state.Important
          ? !this.state.Important
          : this.state.Important,
        Done: !this.state.Done
      });
      this.props.onFilterChange({done : !this.state.Done});
    }
  };

  render() {
    let classAll = "btn";
    let classImportant = "btn";
    let classDone = "btn";

    if (this.state.All) {
      classAll += " btn-dark";
    }
    if (this.state.Important) {
      classImportant += " btn-dark";
    }
    if (this.state.Done) {
      classDone += " btn-dark";
    }

    return (
      <div className="btn-group">
        <button type="button" className={classAll} onClick={this.onAll}>
          All
        </button>
        <button
          type="button"
          className={classImportant}
          onClick={this.onImportant}
        >
          Important
        </button>
        <button type="button" className={classDone} onClick={this.onDone}>
          Done
        </button>
      </div>
    );
  }
}
