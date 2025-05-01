import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const ViewProfile = ({ closeDialog }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
    } catch (error) {
      console.error('Failed to fetch profile', error);
    }
  };

  return (
    <Box sx={{ position: 'relative', maxWidth: 500, margin: '0 auto', p: 3 }}>
      {/* Close Button */}
      <IconButton
        onClick={closeDialog}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          bgcolor: '#f0f0f0',
          '&:hover': { bgcolor: '#e0e0e0' }
        }}
      >
        <CloseIcon />
      </IconButton>

      <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
        <Avatar sx={{ width: 100, height: 100, margin: '0 auto', mb: 2, bgcolor: 'primary.main' }}>
          {user.name?.charAt(0)}
        </Avatar>
        <Typography variant="h5" gutterBottom>{user.name}</Typography>
        <Typography variant="subtitle1" gutterBottom>{user.email}</Typography>
        <Typography variant="body2">Role: {user.role}</Typography>
        <Typography variant="body2">
          Joined: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : ''}
        </Typography>
      </Paper>
    </Box>
  );
};

export default ViewProfile;
