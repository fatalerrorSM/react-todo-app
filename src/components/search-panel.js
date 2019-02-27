import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    search: ""
  };

  onSearchPanelChange = e => {
    this.setState({
      search: e.target.value
    });
    this.props.onTermChange(e.target.value);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search smth"
          onChange={this.onSearchPanelChange}
          value={this.state.search}
        />
      </form>
    );
  }
}
