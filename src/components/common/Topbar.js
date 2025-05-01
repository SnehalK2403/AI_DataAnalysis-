// src/components/common/Topbar.js
import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Box,Dialog
} from '@mui/material';
import { Logout, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ViewProfile from '../profile/ViewProfile';
import EditProfile from '../profile/EditProfile';
const drawerWidth = 260;

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const menuId = 'primary-search-account-menu';
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: 'primary.main'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo + Heading on Left */}
          <Box display="flex" alignItems="center">
            <img src="/ai_vis.png" alt="Logo" style={{ height: 40, marginRight: 10 }} />
            <Typography variant="h6" fontWeight="bold">
              AI Visualizer and Analysis Platform
            </Typography>
          </Box>

          {/* Icons on Right */}
          <Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize="large" />
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleLogout}
              sx={{ ml: 2 }}
            >
              <Logout fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { handleMenuClose(); setOpenView(true); }}>View Profile</MenuItem>
        <MenuItem onClick={() => { handleMenuClose(); setOpenEdit(true); }}>Edit Profile</MenuItem>
      </Menu>

     {/* View Profile Popup */}
     <Dialog open={openView} onClose={() => setOpenView(false)} maxWidth="sm" fullWidth>
     <ViewProfile closeDialog={() => setOpenView(false)} />
      </Dialog>

      {/* Edit Profile Popup */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)} maxWidth="sm" fullWidth>
        <EditProfile closeDialog={() => setOpenEdit(false)} />
      </Dialog>

    </>
  );
};

export default Topbar;
