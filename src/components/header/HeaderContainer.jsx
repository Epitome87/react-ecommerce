import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Logo = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionNavLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
`;
