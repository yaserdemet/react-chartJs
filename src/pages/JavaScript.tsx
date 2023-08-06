import { Helmet } from 'react-helmet-async';
// @mui
import { Button, Container, Typography, Box } from '@mui/material';
import { m, MotionProps } from 'framer-motion';

// components
import Header from 'src/features/js/Header';
import UsefullJs from 'src/features/js/UsefullJs';
import { useSettingsContext } from '../components/settings';


// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettingsContext();

  return (
    <Box
    initial={{opacity : 0, translateY : 30}}
    animate={{opacity : 1, translateY : 0}}
    component={m.section}>
      <Helmet>
        <title> JavaScript | Usefull Notes</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          JavaScript
        </Typography>
        <Header />
        <UsefullJs />
      </Container>
    </Box>
  );
}
