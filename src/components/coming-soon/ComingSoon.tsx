// @mui
import { Stack, Typography } from '@mui/material';
// assets
import { ComingSoonIllustration } from 'src/assets/illustrations';
import Logo from '../logo/Logo';

// ----------------------------------------------------------------------

export default function ComingSoon() {
  return (
    <Stack sx={{ textAlign: 'center', my: 5 }}>
      <Typography variant='h3' paragraph>
        Çok Yakında!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>Şu anda bu sayfa üzerinde çalışıyoruz!</Typography>

      <ComingSoonIllustration sx={{ my: 10, height: 240 }} />
      <Logo sx={{ ml: 10 }} />
    </Stack>
  );
}
