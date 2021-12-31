import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, size, imageUrl, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div className={`menu-item ${size}`} onClick={() => navigate(linkUrl)}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='content'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <span className='subtitle'>View Products</span>
      </div>
    </div>
  );
};

export default MenuItem;
