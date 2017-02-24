import React from 'react';
import './ListItem.css';

export default (props) => {
  return (
      <li className="list-item">
        <a href={props.href} onClick={props.onClick}>{props.children}</a>
      </li>
  )
}
