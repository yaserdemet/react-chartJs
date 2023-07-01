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
      <>
        <>
          <Card sx={{ pb: 2, px: 2, mb : 4}}>
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
                    Ankara
                  </Link>
                </Typography>
              </Stack>

              <Stack direction="row">
                <StyledIcon icon="eva:email-fill" />
                <Typography variant="body2">ddemety@hotmail.com</Typography>
              </Stack>

              <Stack direction="row">
                <StyledIcon icon="ic:round-business-center" />

                <Typography variant="body2">
                  React Developer &nbsp;
                  <Link component="span" variant="subtitle2" color="text.primary">
                    Elegant Software
                  </Link>
                </Typography>
              </Stack>

              <Stack direction="row">
                <StyledIcon icon="ic:round-business-center" />

                <Typography variant="body2">
                  Studied at &nbsp;
                  <Link component="span" variant="subtitle2" color="text.primary">
                    Turkish Air Forces
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </>
      </>
    </>
  );
}

export default ProfileAbout;
