import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(e) {
    const { onQueryChange } = this.props;
    onQueryChange(e.target.value);
  }

  render() {
    return (
        <input
            className="search-input"
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.handleQueryChange}
        />
    )
  }
}

export default Input;
