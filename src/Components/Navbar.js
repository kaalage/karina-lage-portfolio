import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineBars3 } from "react-icons/hi2";
import Logo from "../Assets/logo.png";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
        },
        {
            text: "Projects",
        },
        {
            text: "About",
        },
        {
            text: "Contact",
        },
    ]

  return (
    <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
          <a><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></a>
          <a><Link to="projects" spy={true} smooth={true} duration={500}>Projects</Link></a>
          <a><Link to="about" spy={true} smooth={true} duration={500}>About</Link></a>
          <a><Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link></a>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar;