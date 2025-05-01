// src/components/common/Sidebar.js
import React from 'react';
import {
  Drawer, Toolbar, Box, Avatar, Typography, List, ListItem, ListItemButton, ListItemText, Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 260;

const Sidebar = ({ user, uploadedFiles }) => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: '#f4f6f8', borderRight: '1px solid #ccc' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Avatar
            sx={{
              width: 90,
              height: 90,
              mb: 1,
              bgcolor: 'primary.main',
              fontSize: 36
            }}
          >
            {user.name.charAt(0)}
          </Avatar>
          <Typography variant="h6" fontWeight="bold">{user.name}</Typography>
        </Box>

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/upload-excel')}>
              <ListItemText primary="Upload File" sx={{ pl: 2 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/manual-data')}>
              <ListItemText primary="Manual Update" sx={{ pl: 2 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle2" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>
          Uploaded Files
        </Typography>

        <List>
          {uploadedFiles.map((file, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={file.name} sx={{ pl: 2 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
