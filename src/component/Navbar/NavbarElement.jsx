import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
export const Nav = styled.nav`
  background: #2a2a2a;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  position: sticky;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavLogo = styled(LinkRouter)`
  color: white;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  text-decoration: none;
  position: relative;
  padding: 16px 0;
  margin: 0 12px;
  font-size: 1rem;
  text-transform: uppercase;
  transition: color 0.1s, background-color 0.1s;
  color: #fff;

  &.active {
    border-bottom: 3px solid #01bf71;
  }

  &:hover {
    color: #4dd0e1;
  }
  &:focus,
  &:active {
    color: #01bf71;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    height: 3px;
    width: 100%;
    background-color: #01bf71;
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
    transition: color 0.1s, -webkit-transform 0.2s ease-out;
    transition: color 0.1s, transform 0.2s ease-out;
    transition: color 0.1s, transform 0.2s ease-out,
      -webkit-transform 0.2s ease-out;
  }

  &:active::before {
    background-color: #01bf71;
  }

  &:hover::before,
  &:focus::before {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkScroll)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
