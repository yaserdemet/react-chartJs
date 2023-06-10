import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
// components
import UsefullJs from 'src/features/js/UsefullJs';
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Page Two | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Page Two
        </Typography>

      <UsefullJs />
      </Container>
    </>
  );
}
