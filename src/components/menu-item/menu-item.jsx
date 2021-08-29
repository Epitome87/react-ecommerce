import React from 'react';
import './menu-item.styles.scss';

const MenuItem = (props) => {
  return (
    <div className={`menu-item ${props.size}`}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className='content'>
        <h2 className='title'>{props.title.toUpperCase()}</h2>
        <span className='subtitle'>View Products</span>
      </div>
    </div>
  );
};

export default MenuItem;
