import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container">
          <h1 className="search-title">Search for framework</h1>
          <SearchBar />
        </div>
    );
  }
}

export default App;
