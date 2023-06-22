import React from 'react';
import { Stack, Card, Avatar, Typography } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';
import { CustomAvatar } from 'src/components/custom-avatar';
import { useAuthContext } from 'src/auth/useAuthContext';
import User from '../../assets/illustrations/overlay_2.jpg';

function Header() {
  const { user, logout } = useAuthContext();

  return (
    <Card
      sx={{
        backgroundImage: `url(${User})`, // Add "url()" around the image URL
        py: 12,
        px: 2,
        overflow: 'visible',
      }}
    >
      <CustomAvatar
        sx={{ width: 128, height: 128, position: 'absolute', bottom: -24 }}
        src={user?.photoURL}
        alt={user?.displayName}
        name={user?.displayName}
      />
      <Typography
        variant="h4"
        sx={{ position: 'absolute', bottom: 36, left: 160, color: blueGrey[900] }}
      >
        {user?.displayName}
      </Typography>

      <Typography
        sx={{ position: 'absolute', bottom: 4, opacity: 0.72, left: 160, color: blueGrey[900] }}
      >
        {user?.role}
      </Typography>
    </Card>
  );
}

export default Header;
