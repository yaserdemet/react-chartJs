import React from 'react';
import {
  Stack,
  Card,
  Avatar,
  Typography,
  Box,
  Grid,
  Divider,
  CardHeader,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Iconify from 'src/components/iconify/Iconify';

const StyledIcon = styled(Iconify)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

function ProfileAbout() {
  return (
    <>
      <Grid mt={2} container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ pb: 2, px: 2 }}>
            <CardHeader title="About" />
            <Stack spacing={2} sx={{ p: 3 }}>
              <Typography variant="body2">
                Worked as 10 years in Air Traffic Control Tower
              </Typography>

              <Stack direction="row">
                <StyledIcon icon="eva:pin-fill" />

                <Typography variant="body2">
                  Live at &nbsp;
                  <Link component="span" variant="subtitle2" color="text.primary">
                    dwadawd
                  </Link>
                </Typography>
              </Stack>

              <Stack direction="row">
                <StyledIcon icon="eva:email-fill" />
                <Typography variant="body2">dwadawd</Typography>
              </Stack>

              <Stack direction="row">
                <StyledIcon icon="ic:round-business-center" />

                <Typography variant="body2">
                  dawdwadadw at &nbsp;
                  <Link component="span" variant="subtitle2" color="text.primary">
                    dawdwad
                  </Link>
                </Typography>
              </Stack>

              <Stack direction="row">
                <StyledIcon icon="ic:round-business-center" />

                <Typography variant="body2">
                  Studied at &nbsp;
                  <Link component="span" variant="subtitle2" color="text.primary">
                    dawdawd
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ProfileAbout;