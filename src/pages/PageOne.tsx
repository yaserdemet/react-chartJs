import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
import Activities from 'src/features/charts/Activities';
// components
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Page One | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Page One
        </Typography>

        <Activities />
      </Container>
    </>
  );
}
