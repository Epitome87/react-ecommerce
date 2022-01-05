import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/MenuItem';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory.selectors';

const Directory = (props) => {
  const sections = useSelector((state) => selectDirectorySections(state));

  const renderedSections = sections.map(
    ({ id, title, imageUrl, size, linkUrl }) => {
      return (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      );
    }
  );
  return <div className='directory-menu'>{renderedSections}</div>;
};

export default Directory;
