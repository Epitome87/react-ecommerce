import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './MenuItemContainer';

const MenuItem = ({ title, size, imageUrl, linkUrl }) => {
  const navigate = useNavigate();

  return (
    // Takes size as class
    <Styled.MenuItem size={size} onClick={() => navigate(linkUrl)}>
      <Styled.BackgroundImage imageUrl={imageUrl}></Styled.BackgroundImage>
      <Styled.Content>
        <Styled.ContentTitle>{title.toUpperCase()}</Styled.ContentTitle>
        <Styled.ContentSubtitle>View Products</Styled.ContentSubtitle>
      </Styled.Content>
    </Styled.MenuItem>
  );
};

export default MenuItem;
