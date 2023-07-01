import React from 'react';
import CountUp from 'react-countup';
import { Stack, Card, Avatar, Typography, Box, Grid, Divider } from '@mui/material';


function ProfileInfo() {
  return (
    <>
      <>
        <>
          <Card sx={{ py: 3, px: 4, mb : 4 }}>
            <Stack
              display="flex"
              spacing={2}
              alignItems="center"
              justifyContent="space-around"
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Stack>
                <Typography variant="h4">
                  <CountUp end={1947} />
                </Typography>
                <Typography sx={{ color: 'text.secondary' }} variant="body2">
                  Followers
                </Typography>
              </Stack>

              <Stack>
                <Typography variant="h4">
                <CountUp end={1266} />

                </Typography>
                <Typography sx={{ color: 'text.secondary' }} variant="body2">
                  Followers
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </>
      </>
    </>
  );
}

export default ProfileInfo;
