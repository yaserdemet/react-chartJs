import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography, Skeleton, Stack } from '@mui/material';
import Activities from 'src/features/charts/Activities';
// components
import { useEffect, useState } from 'react';
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettingsContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1024);
  });

  return (
    <>
      <Helmet>
        <title> ChartJs | Usefull Frontend</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          ChartJs
        </Typography>
        {loading ? (
          <Stack p={0} direction="column">
            <Stack p={0} display="flex" spacing={2} direction="row">
              <Skeleton height="200px" width="40%" />
              <Skeleton height="200px" width="50%" />
              <Skeleton height="200px" width="50%" />
            </Stack>
            <Stack p={0} display="flex" spacing={2} direction="row">
              <Skeleton height="200px" width="50%" />
              <Skeleton height="200px" width="50%" />
            </Stack>
            <Stack p={0} display="flex" alignItems="center" spacing={2} direction="row">
              <Skeleton height="200px" width="50%" />
              <Skeleton height="200px" width="50%" />
            </Stack>
          </Stack>
        ) : (
          <Activities />
        )}
        {/* <Activities /> */}
      </Container>
    </>
  );
}
