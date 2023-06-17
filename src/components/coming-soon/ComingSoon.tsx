// @mui
import { Stack, Typography } from '@mui/material';
// assets
import { m } from 'framer-motion';
import { ComingSoonIllustration } from 'src/assets/illustrations';
import { MotionContainer, varBounce } from '../animate';
import Logo from '../logo/Logo';

// ----------------------------------------------------------------------

export default function ComingSoon() {
  return (
    <Stack sx={{ textAlign: 'center', my: 5 }}>
      <Typography variant="h3" paragraph>
        Çok Yakında!
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>
        Şu anda bu sayfa üzerinde çalışıyoruz!
      </Typography>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <ComingSoonIllustration sx={{ my: 10, height: 240 }} />
        </m.div>
        <Logo sx={{ ml: 10 }} />
      </MotionContainer>
    </Stack>
  );
}
