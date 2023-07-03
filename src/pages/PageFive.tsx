import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useBattery } from 'react-use';
// components
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageFive() {
  const { themeStretch } = useSettingsContext();
  const battery: any = useBattery();
  const { isSupported, level, charging, dischargingTime, chargingTime } = battery;

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
          <strong>Charge level</strong>:&nbsp;&nbsp; <span>{(level * 100).toFixed(0)}%</span> <br />
          {/* Display Whether Device is charging or not */}
          <strong>Charging</strong>:&nbsp;&nbsp; <span>{charging ? 'Yes' : 'No'}</span> <br />
          {/* Display Device Charging time */}
          <strong>Charging time</strong>:&nbsp;&nbsp;
          <span>{chargingTime && chargingTime }</span> <br />
          {/* Display Device Discharging time */}
          <strong>Discharging time</strong>:&nbsp;&nbsp; <span>{dischargingTime}</span>
        </Typography>
      </Container>
    </>
  );
}
