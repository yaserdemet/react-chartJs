import React from 'react';
// @mui
import { Box, Typography } from '@mui/material';

export default function Footer() {
  const today = new Date();
  const dateString = today.toLocaleDateString();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 4,
        textAlign: 'center',
        color: 'text.secondary',
        // borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="body2">{dateString}</Typography>
    </Box>
  );
}
