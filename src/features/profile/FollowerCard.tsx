import React, { useEffect, useState } from 'react';
import { Box, Card, Button, Avatar, Typography, Stack } from '@mui/material';
import Iconify from 'src/components/iconify/Iconify';
import axiosInstance from 'src/utils/axios';
import { m } from 'framer-motion';
function FollowerCard({ follower }: any) {
  const { name, country, avatarUrl, isFollowed } = follower;

  const [toggle, setToogle] = useState(isFollowed);
  return (
    <>
     
      <Card
        layout
        drag
        dragElastic={0.2}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        component={m.div}
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar alt={name} src={avatarUrl} sx={{ width: 48, height: 48 }} />

        <Box
          sx={{
            pl: 2,
            pr: 1,
            flexGrow: 1,
            minWidth: 0,
          }}
        >
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>

          <Stack spacing={0.5} direction="row" alignItems="center" sx={{ color: 'text.secondary' }}>
            <Iconify icon="eva:pin-fill" width={16} sx={{ flexShrink: 0 }} />

            <Typography variant="body2" component="span" noWrap>
              {country}
            </Typography>
          </Stack>
        </Box>

        <Button
          size="small"
          onClick={() => setToogle(!toggle)}
          variant={toggle ? 'text' : 'outlined'}
          color={toggle ? 'primary' : 'inherit'}
          startIcon={toggle && <Iconify icon="eva:checkmark-fill" />}
          sx={{ flexShrink: 0 }}
        >
          {toggle ? 'Followed' : 'Follow'}
        </Button>
      </Card>
    </>
  );
}

export default FollowerCard;
