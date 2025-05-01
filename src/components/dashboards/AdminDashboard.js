import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box p={3} boxShadow={3} borderRadius={2}>
            <Typography variant="h6" gutterBottom>
              Manage Users
            </Typography>
            <Button variant="contained" fullWidth onClick={() => navigate('/manage-users')}>
              Manage
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box p={3} boxShadow={3} borderRadius={2}>
            <Typography variant="h6" gutterBottom>
              View Uploaded Datasets
            </Typography>
            <Button variant="contained" fullWidth onClick={() => navigate('/view-datasets')}>
              View Datasets
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
