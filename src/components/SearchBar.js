import React, { Component } from 'react';
import List from './List';
import ListItem from './ListItem';
import Input from './Input';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: []
    };
    this.onQueryChange = this.onQueryChange.bind(this);
  }

  onQueryChange(query) {
    this.setState({
      query
    });

    const { data } = this.props;

    this.setState({
      query,
      data: data.filter(item => {
        return query && item.toLowerCase().startsWith(query.toLowerCase());
      })
    });
  }

  onResultClick(item) {
    this.setState({
      query: item,
      data: []
    })
  }

  render() {
    const { data, query } = this.state;

    return (
        <div className="search-container">
          <Input
              type={'text'}
              placeholder="e.g. Ember"
              value={query}
              onQueryChange={this.onQueryChange}
          />
          <List>
            {data.map(item =>
                <ListItem
                    key={item}
                    href="#"
                    onClick={this.onResultClick.bind(this, item)}
                >
                  {item}
                </ListItem>
            )}
          </List>
        </div>
    )
  }
}

export default SearchBar;

SearchBar.defaultProps = {
  data: [
    'AngularJS',
    'Aurelia',
    'Backbone.js',
    'Cappuccino',
    'Chaplin.js',
    'Echo',
    'Ember.js',
    'Enyo',
    'Ext JS',
    'Google Web Toolkit',
    'JavaScriptMVC',
    'Knockout',
    'Meteor',
    'Mojito',
    'MooTools',
    'Node.js',
    'Prototype JavaScript Framework',
    'React.js',
    'Rialto Toolkit',
    'SproutCore',
    'Vue.js',
    'Wakanda Framework',
  ]
};
