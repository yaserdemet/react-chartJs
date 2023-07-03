import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography, Box, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useBattery } from 'react-use';
// components
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageFive() {
  const { themeStretch } = useSettingsContext();
  const battery: any = useBattery();
  const { isSupported, level, charging, dischargingTime, chargingTime } = battery;
console.log(navigator);
  return (
    <>
      <Helmet>
        <title> Page Five | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Page Five
        </Typography>

        <Typography gutterBottom>
          {/* Display Battery Charge Percentage */}
          {/* Display Whether Device is charging or not */}

          {/* Display Device Charging time */}
        </Typography>
        <Stack direction="column" spacing={4}>
        <Box>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>
            <strong>Charge level</strong>:&nbsp;&nbsp; <span>{(level * 100).toFixed(0)}%</span>{' '}
            <br />
          </Button>
          <Button>
            {' '}
            <strong>Charging</strong>:&nbsp;&nbsp; <span>{charging ? 'Yes' : 'No'}</span> <br />
          </Button>
          <Button>
            <strong>Discharging time</strong>:&nbsp;&nbsp; <span>{dischargingTime}</span>
          </Button>
        </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>
              <strong>Is Online</strong>:&nbsp;&nbsp; <span>{navigator.onLine ? 'Yes' : 'No'}</span>{' '}
              <br />
            </Button>
            <Button>
              {' '}
              <strong>hardwareConcurrency</strong>:&nbsp;&nbsp; <span>{navigator.hardwareConcurrency}</span> <br />
            </Button>
            <Button>
              <strong>Languages</strong>:&nbsp;&nbsp; <span>{navigator.languages.join(", ")}</span>
            </Button>
          </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>
              <strong>Cookies Enabled</strong>:&nbsp;&nbsp; <span>{navigator.cookieEnabled ? 'Yes' : 'No'}</span>{' '}
              <br />
            </Button>
            <Button>
              <strong>Browser Platform</strong>:&nbsp;&nbsp; <span>{navigator.platform}</span> <br />
            </Button>
            <Button>
              <strong>App Name</strong>:&nbsp;&nbsp; <span>{navigator.appName}</span>
            </Button>
          </ButtonGroup>
        </Box>
        </Stack>
      </Container>
    </>
  );
}
