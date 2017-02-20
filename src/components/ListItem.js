import React from 'react';
import './ListItem.css';

export default (props) => {
  return (
      <li className="list-item">
        <a href={props.href}>{props.children}</a>
      </li>
  )
}
