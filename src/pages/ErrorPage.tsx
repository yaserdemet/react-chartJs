import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
// components
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageSix() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Error Page | Usefull Page</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Page Six
        </Typography>

      
      </Container>
    </>
  );
}
