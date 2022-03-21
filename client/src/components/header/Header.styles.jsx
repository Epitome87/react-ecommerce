import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  font-size: 1.1rem;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  color: black;
  color: hsl(219, 9%, 45%);
  color: red;
  background: linear-gradient(
      to right,
      hsl(220, 14%, 100%) 0%,
      hsl(220, 14%, 85%) 15%,
      hsl(220, 14%, 85%) 85%,
      hsl(220, 14%, 100%) 100%
    )
    left bottom transparent no-repeat;
  background-size: 100% 2px;

  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled(NavLink)`
  // height: 100%;
  // width: 70px;
  width: 40px;
  // padding: 25px;
  // padding: 5px;

  img {
    width: 100%;
  }

  // @media screen and (max-width: 800px) {
  //   width: 50px;
  //   padding: 0;
  // }
`;

export const Options = styled.div`
  width: 60%;
  height: 100%;
  display: none;
  gap: 1rem;
  padding-right: 1rem;

  @media screen and (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const OptionNavLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: relative;

  &:hover::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -15px;
    background-color: hsl(26, 100%, 55%);
    width: 70%;
    height: 5px;
  }
`;
