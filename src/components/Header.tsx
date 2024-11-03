import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
          return;
      }
      setDrawerOpen(open);
  };

    const navLinks = [
        { label: "GitHub", href: "https://github.com/Danil4UA" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/daniil-kapkov-7b9243281/" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2', paddingX: { xs: 2, md: 4 } }}>
            <Toolbar>
                {/* Logo or Name */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    Daniil Kapkov
                </Typography>

                {/* Desktop Navigation Links */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    {navLinks.map((link) => (
                        <Button 
                            key={link.label} 
                            color="inherit" 
                            href={link.href} 
                            target={link.href.includes('http') ? '_blank' : '_self'}
                        >
                            {link.label}
                        </Button>
                    ))}
                </Box>

                {/* Hamburger Menu Icon for Mobile */}
                <IconButton
                    color="inherit"
                    edge="end"
                    onClick={toggleDrawer(true)}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Drawer Component for Mobile Navigation */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            {navLinks.map((link) => (
                                <ListItem key={link.label} disablePadding>
                                    <ListItemButton component="a" href={link.href} target={link.href.includes('http') ? '_blank' : '_self'}>
                                        <ListItemText primary={link.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
