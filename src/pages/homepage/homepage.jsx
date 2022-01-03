import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/Directory';

const HomePage = (props) => {
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};

export default HomePage;
