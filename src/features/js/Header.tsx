import { useTheme } from '@emotion/react';
import { Card, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { SeoIllustration } from 'src/assets/illustrations';

export default function Header() {
  const theme = useTheme();

  return (
    <>
      <>
        <Grid mb={4} container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card
              style={{ backgroundColor: '#8dd9b377' }}
              sx={{ px: 2, py: 3, backgroundColor: 'success' }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <Typography
                    textAlign={{ xs: 'center', md: 'left' }}
                    style={{ color: '#1f8b57' }}
                    paragraph
                    variant="h4"
                  >
                    Welcome Back !
                  </Typography>
                  <Typography
                    textAlign={{ xs: 'center', md: 'left' }}
                    style={{ color: '#288658' }}
                    variant="body2"
                  >
                    This page created for write \n down usefull fronted informations
                  </Typography>
                </Grid>
                <Grid item xs={8} md={4}>
                  <Stack display="flex" justifyContent="center" alignItems="center">
                    <SeoIllustration />
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>dawd</Card>
          </Grid>
        </Grid>
      </>
    </>
  );
}
