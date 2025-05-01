// src/components/ManualData.js
import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Grid } from '@mui/material';

const ManualData = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle data submission logic here, like sending it to your backend
    alert('Data submitted successfully!');
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>Enter Manual Data</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            name="name"
            value={data.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            value={data.email}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ width: '100%' }}
      >
        Submit Data
      </Button>
    </Box>
  );
};

export default ManualData;
