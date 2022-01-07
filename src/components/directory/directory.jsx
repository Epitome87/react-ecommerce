import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory.selectors';
import * as Styled from './DirectoryContainer';

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
  return <Styled.DirectoryMenu>{renderedSections}</Styled.DirectoryMenu>;
};

export default Directory;
