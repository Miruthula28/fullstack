import React from 'react';
import ResponsiveAppBar from '../navbar/Navbar';
import './Home.css';
import { Grid, Typography, Button } from '@mui/material';

function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="home-container">
        <Grid container className="home-grid" alignItems="center">
          {/* Left Side - Text */}
          <Grid item xs={12} md={6} className="home-text">
            <Typography variant="h3" gutterBottom>
              Welcome to Homepage
            </Typography>
            <Typography variant="h6" gutterBottom>
              Login to access!!
            </Typography>
          </Grid>

          {/* Right Side - Image */}
          <Grid item xs={12} md={6} className="home-image">
            <img src="/task-list.svg" alt="Welcome Visual" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
