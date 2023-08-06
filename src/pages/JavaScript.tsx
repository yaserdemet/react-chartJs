import { Helmet } from 'react-helmet-async';
// @mui
import { Button, Container, Typography, Box } from '@mui/material';
import { m, motion, MotionProps, AnimatePresence } from 'framer-motion';

// components
import Header from 'src/features/js/Header';
import UsefullJs from 'src/features/js/UsefullJs';
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatePresence>
      <m.div
        initial={{ opacity: 0, translateY: 130 }}
        animate={{ opacity: 1, translateY: 0 }}
        // transition={{
        //   type: 'spring',
        //   stiffness: 500, // reduced stiffness
        //   damping: 14, // increased damping
        //   mass: 1,
        // }}
        exit={{ opacity: 0, scale: 0.5 }}
        // component={m.section}
      >
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
      </m.div>
    </AnimatePresence>
  );
}
