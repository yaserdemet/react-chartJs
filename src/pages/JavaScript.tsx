import { Helmet } from 'react-helmet-async';
// @mui
import { Button, Container, Typography } from '@mui/material';
// components
import Header from 'src/features/js/Header';
import UsefullJs from 'src/features/js/UsefullJs';
import { useSettingsContext } from '../components/settings';
import useCopyClipBoard from 'src/utils/useCopyClipBoard';

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettingsContext();

  const [copied, copyText] = useCopyClipBoard('hellöö');
  return (
    <>
      <Helmet>
        <title> JavaScript | Usefull Notes</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          JavaScript
        </Typography>
        <Button onClick={() => copyText()}>copy</Button>
        <Header />
        <UsefullJs />
      </Container>
    </>
  );
}
