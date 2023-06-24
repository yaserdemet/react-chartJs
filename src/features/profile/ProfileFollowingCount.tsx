import React from 'react';
import { Stack, Card, Avatar, Typography, Box, Grid, Divider } from '@mui/material';

function ProfileInfo() {
  return (
    <>
      <Grid mt={2} container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 3, px: 4 }}>
            <Stack
              display="flex"
              spacing={2}
              alignItems="center"
              justifyContent="space-around"
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Stack>
                <Typography variant="h4">1947</Typography>
                <Typography sx={{ color: 'text.secondary' }} variant="body2">
                  Followers
                </Typography>
              </Stack>

              <Stack>
                <Typography variant="h4">1947</Typography>
                <Typography sx={{ color: 'text.secondary' }} variant="body2">
                  Followers
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ProfileInfo;
