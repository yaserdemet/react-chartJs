import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography, Box } from '@mui/material';
// components
import UsefullReact from 'src/features/react/UsefullReact';
import ComingSoon from 'src/components/coming-soon/ComingSoon';
import { useSettingsContext } from '../components/settings';
import { m, MotionProps } from 'framer-motion';

// ----------------------------------------------------------------------

export default function PageThree() {
  const { themeStretch } = useSettingsContext();

  return (
    <Box
      initial={{ opacity: 0, translateX: -120 }}
      animate={{ opacity: 1, translateX: 0, }}
      transition={{ duration: 0.5 }}
      component={m.section}
    >
      <Helmet>
        <title> Css | Usefull Notes</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          React
        </Typography>

        <UsefullReact />
      </Container>
    </Box>
  );
}
