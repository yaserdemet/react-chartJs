import React from 'react';
import { Link, Card, CardHeader, Stack, Grid } from '@mui/material';
import { _socials } from 'src/_mock/arrays';
import Iconify from 'src/components/iconify/Iconify';

function Social() {
  return (
    <>
      <>
        <>
          <Card>
            <CardHeader title="Social" />

            <Stack spacing={2} sx={{ p: 3 }}>
              {_socials.map((link) => (
                <Stack key={link.name} direction="row" sx={{ wordBreak: 'break-all' }}>
                  <Iconify
                    icon={link.icon}
                    sx={{
                      mr: 2,
                      flexShrink: 0,
                      color: link.color,
                    }}
                  />
                  <Link component="span" variant="body2" color="text.primary">
                    {link.path}
                  </Link>
                </Stack>
              ))}
            </Stack>
          </Card>
        </>
      </>
    </>
  );
}

export default Social;
