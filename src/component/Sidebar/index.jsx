import React from "react";
import {
  SidebarContainer,
  Icon,
  SidebarIconWrap,
  SidebarWrapper,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  NavIconMenu,
  NavIconItem,
  NavIconLinks,
} from "./SideBarElement";

import { FaGithub, FaFacebook, FaLinkedin, FaGitlab } from "react-icons/fa";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="discover">Discover</SidebarLink>

            <SidebarLink to="service">Services</SidebarLink>

            <SidebarLink to="project">Project</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
        <SidebarIconWrap>
          {/* <NavIconMenu>
            <NavIconItem>
              <NavIcon to="github">
                <FaGithub />
              </NavIcon>
              <NavIcon to="github">
                <FaGithub />
              </NavIcon>
            </NavIconItem>
          </NavIconMenu> */}
          {/* <NavIcon></NavIcon> */}
          <NavIconMenu>
            <NavIconItem>
              <NavIconLinks to="about">
                <FaGithub />
              </NavIconLinks>
            </NavIconItem>
            <NavIconItem>
              <NavIconLinks to="discover">
                <FaFacebook />
              </NavIconLinks>
            </NavIconItem>
            <NavIconItem>
              <NavIconLinks to="service">
                <FaLinkedin />
              </NavIconLinks>
            </NavIconItem>
            <NavIconItem>
              <NavIconLinks to="project">
                <FaGitlab />
              </NavIconLinks>
            </NavIconItem>
          </NavIconMenu>
        </SidebarIconWrap>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
