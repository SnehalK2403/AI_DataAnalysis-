import React, { useState } from 'react';
import { Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import Sidebar from '../common/Sidebar';
import Topbar from '../common/Topbar';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register chart modules
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const UserDashboard = () => {
  const [user] = useState({ name: 'Tejal Choudhari' });
  const [uploadedFiles] = useState([
    { name: 'Data File 1' },
    { name: 'Data File 2' }
  ]);

  const chartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Dataset Example',
        data: [10, 20, 15, 25],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar user={user} uploadedFiles={uploadedFiles} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Topbar />
        <Toolbar />
        
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            AI Visualizations
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box p={3} boxShadow={3} borderRadius={2}>
                <Typography variant="h6" gutterBottom>Sample Bar Graph</Typography>
                <Bar data={chartData} />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box p={3} boxShadow={3} borderRadius={2}>
                <Typography variant="h6" gutterBottom>More Insights Coming Soon!</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default UserDashboard;
