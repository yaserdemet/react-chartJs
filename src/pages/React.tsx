import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
// components
import UsefullReact from 'src/features/react/UsefullReact';
import ComingSoon from 'src/components/coming-soon/ComingSoon';
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageThree() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Css | Usefull Notes</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          React
        </Typography>
      
        <UsefullReact />
      </Container>
    </>
  );
}
