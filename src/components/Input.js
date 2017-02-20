import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    return (
        <input
            className="search-input"
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
        />
    )
  }
}

export default Input;
