import React from 'react';
import { Box, Card, Button, Avatar, Typography, Stack } from '@mui/material';
import { _userFollowers } from 'src/_mock/arrays';
import FollowerCard from './FollowerCard';


function Friends() {
    const followers = _userFollowers
    console.log(followers);

  return (
    <>
      <Typography variant="h4" sx={{ my: 5 }}>
        Followers
      </Typography>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {followers.map((follower) => (
          <FollowerCard key={follower.id} follower={follower} />
       
        ))}
      </Box>
    </>
  );
}

export default Friends;
