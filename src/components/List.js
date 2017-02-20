import React  from 'react';
import './List.css';

export default ({ children }) => {
  return (
      <ul className="list">
        {children}
      </ul>
  )
};
