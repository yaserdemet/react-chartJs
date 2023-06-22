import React from 'react';
import { Stack, Card, Box, Paper } from '@mui/material';
import { blue } from '@mui/material/colors';
import { CustomAvatar } from 'src/components/custom-avatar';
import User from '../../assets/illustrations/overlay_3.jpg';

function Header() {
  return (
    <Paper
      sx={{
        width: '100%',
        height: '20vh',
        backgroundImage: User,
        p: 4,
        
      }}
    >
      <CustomAvatar src={User} name='Yaser'  />
    </Paper>
  );
}

export default Header;
