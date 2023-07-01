import React from 'react';
import {
  Box,
  Card,
  Link,
  Stack,
  Avatar,
  MenuItem,
  IconButton,
  Typography,
  InputAdornment,
  Grid,
} from '@mui/material';

function ImageSide() {
  return (
    <>
      <Grid container>
        <Grid xs={12} md={8} item>
          <img
            src="https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_2.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ImageSide;
