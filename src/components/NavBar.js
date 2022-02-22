import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link as LinkRouter} from "react-router-dom"

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static" className='NavBar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem>
                <LinkRouter to="carrousel" className='linkresp'> Carrousel </LinkRouter>
              </MenuItem>
              <MenuItem>
                <LinkRouter to="cards" className='linkresp'>Cards</LinkRouter>
              </MenuItem>
              <MenuItem>
                <LinkRouter to="lamp" className='linkresp'>Lamp</LinkRouter>
              </MenuItem>
              <MenuItem>
                <LinkRouter to="badclock" className='linkresp'>BadClock</LinkRouter>
              </MenuItem>
              <LinkRouter to="goodclock"  className='link'>
            <Button color="inherit">GoodClock</Button>
          </LinkRouter>
          <LinkRouter to="derivedstate"  className='link'>
            <Button color="inherit">DerivedState</Button>
          </LinkRouter>
          <LinkRouter to="apisearch"  className='link'>
            <Button color="inherit">ApiSearch</Button>
          </LinkRouter>

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          <LinkRouter to="carrousel" className='link'>
          <Button color="inherit">Carrousel</Button>
          </LinkRouter>
          <LinkRouter to="cards"  className='link'>
          <Button color="inherit">Cards</Button>
          </LinkRouter>

          <LinkRouter to="lamp"  className='link'>
            <Button color="inherit">Lamp</Button>
          </LinkRouter>
          <LinkRouter to="badclock"  className='link'>
            <Button color="inherit">BadClock</Button>
          </LinkRouter>
          <LinkRouter to="goodclock"  className='link'>
            <Button color="inherit">GoodClock</Button>
          </LinkRouter>
          <LinkRouter to="derivedState"  className='link'>
            <Button color="inherit">DerivedState</Button>
          </LinkRouter>
          <LinkRouter to="apisearch"  className='link'>
            <Button color="inherit">ApiSearch</Button>
          </LinkRouter>

          
          </Box>

       
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
