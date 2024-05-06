import React, { useState } from "react";
import { useTheme } from "styled-components";
import { bioData } from "../../data/data";
import {Nav, ColorText,NavbarContainer,NavLogo, NavItems,NavLink, MobileIcon, MobileMenu, SocialMediaIcons,SocialMediaIcon } from './styles'
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

//TODO -Mail functionality
const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <ColorText>&lt;</ColorText>{bioData.name.split(" ")[0]}
          <div style={{ color: theme.primary_color }}>/</div>{bioData.name.split(" ")[1]}
          <ColorText>&gt;</ColorText>
        </NavLogo>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
        </NavItems>
        <SocialMediaIcons>
          <SocialMediaIcon href={bioData.github} target="display">
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href="mailto:kogilaanirudh@gmail.com" target="display"> 
            <MailOutlineIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={bioData.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          </SocialMediaIcons> 
        <IconButton sx={{ ml: 1 }} onClick={props.themeToggler} color={props.theme === 'dark' ? "inherit" :"secondary"}>
        {props.theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon style={{ color: "inherit" }} />
        </MobileIcon>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;