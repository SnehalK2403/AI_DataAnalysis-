import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container,
  Grid, Paper, Box, useTheme, useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static" sx={{ px: 2 }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box display="flex" alignItems="center">
            <img
              src="/ai_vis.png"
              alt="logo"
              style={{ height: 80, width: 60, objectFit: 'contain', marginRight: 16 }}
            />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              AI Visualizer
            </Typography>
          </Box>
          <Box display="flex" gap={1} mt={isSmallScreen ? 1 : 0}>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/register')}>
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 8, mb: 8, flexGrow: 1 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to AI Powered Data Visualization & Analytics Platform
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Discover insights from your data with AI-powered visual analytics.
        </Typography>

        {/* Info Cards */}
        <Grid container spacing={5} justifyContent="center">
          {[
            { title: 'Upload & Analyze', desc: 'Easily upload data and generate insights with one click.' },
            { title: 'Interactive Graphs', desc: '2D and 3D visualizations powered by AI.' },
            { title: 'Real-time Updates', desc: 'Live data streams and analysis on the fly.' },
          ].map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={6} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: 'primary.main',
          py: 2,
          mt: 'auto',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} AI Visualizer. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
