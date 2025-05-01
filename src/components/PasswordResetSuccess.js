import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PasswordResetSuccess = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 10,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: 'center',
          bgcolor: 'background.paper'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Password Reset Successful 🎉
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Your password has been updated successfully. Please login with your new password.
        </Typography>
        <Button
          variant="contained"
          onClick={handleLoginRedirect}
        >
          Go to Login
        </Button>
      </Box>
    </Container>
  );
};

export default PasswordResetSuccess;
