import React from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography, Box, Stack, TextField, Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useBattery } from 'react-use';
// components
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------
interface ISetting {
  label: string;
  setting: string;
}
export default function PageFive() {
  const { themeStretch } = useSettingsContext();
  const battery: any = useBattery();
  const {
    isSupported,
    level,
    charging,
    dischargingTime,
    platform,
    appName,
    chargingTime,
    hardwareConcurrency,
    language,
    cookieEnabled,
    deviceMemory,
  } = battery;
  console.log(navigator);
  const labels: ISetting[] = [
    {
      label: 'Charge level',
      setting: (level * 100).toFixed(0),
    },
    {
      label: 'Charging',
      setting: charging ? 'Yes' : 'No',
    },
    {
      label: 'Discharging time',
      setting: dischargingTime,
    },
    {
      label: 'Is Online',
      setting: navigator.onLine ? 'Yes' : 'No',
    },
    {
      label: 'hardwareConcurrency',
      setting: navigator.hardwareConcurrency,
    },
    {
      label: 'Language',
      setting: navigator.language,
    },
    {
      label: 'Cookies Enabled',
      setting: navigator.cookieEnabled,
    },
    {
      label: 'Browser Platform',
      setting: navigator.platform,
    },
    {
      label: 'App Name',
      setting: navigator.appName,
    },
  ];
  const tooltips = [
    {
      id: 1,
      tool: 'd',
    },
    {
      id: 2,
      tool: 'dax',
    },
    {
      id: 3,
      tool: 'dax',
    },
  ];
  return (
    <>
      <Helmet>
        <title> Page Five | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Settings
        </Typography>
        <Stack direction="column" spacing={4}>
          <Stack direction="column" spacing={4}>
            {labels.map((item: ISetting, index: number) => {
              const { label, setting } = item;
              // const tooltip = tooltips.find((tooltipItem) => tooltipItem.id === index);

              return (
                <React.Fragment key={index}>
                  {index  < tooltips.length ? (
                    <Tooltip arrow title={tooltips[index].tool}>
                      <TextField label={label} value={setting} />
                    </Tooltip>
                  ) : (
                    <TextField label={label} value={setting} />
                  )}
                </React.Fragment>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
