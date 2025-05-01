import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Paper, IconButton, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const EditProfile = ({ closeDialog }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFormData({ name: response.data.user.name, email: response.data.user.email });
      if (response.data.user.profilePic) {
        setPreview(`http://localhost:5000/uploads/${response.data.user.profilePic}`);
      }
    } catch (error) {
      console.error('Failed to fetch profile', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    if (profilePic) {
      data.append('profilePic', profilePic);
    }

    try {
      await axios.put('http://localhost:5000/api/auth/update', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
      alert('Profile updated successfully!');
      closeDialog();
    } catch (error) {
      console.error('Profile update failed', error);
      alert('Profile update failed');
    }
  };

  return (
    <Box sx={{ position: 'relative', maxWidth: 600, margin: '0 auto', p: 3 }}>
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

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>Edit Profile</Typography>

        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar
            src={preview}
            sx={{ width: 100, height: 100 }}
          />
        </Box>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleChange}
            helperText="Leave blank if you don't want to change password"
          />

          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{ mt: 2 }}
          >
            Upload Profile Picture
            <input type="file" hidden accept="image/*" onChange={handleFileChange} />
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            fullWidth
          >
            Save Changes
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default EditProfile;
