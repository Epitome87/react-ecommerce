import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  font-size: 1.1rem;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const Logo = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 0.75rem;

  @media screen and (max-width: 800px) {
    gap: 0.1rem;
    width: 80%;
  }
`;

export const OptionNavLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding: 0.25rem 0.5rem;
  }
`;
