import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, Grid, FormControlLabel, Checkbox, AvatarGroup, Stack, TextField } from '@mui/material';
import { useAuthContext } from 'src/auth/useAuthContext';
import { CustomAvatar } from 'src/components/custom-avatar';
import Iconify from 'src/components/iconify/Iconify';
import { _userFollowers } from 'src/_mock/arrays';

function ImageSide() {
  const { user } = useAuthContext();
  const [isLiked, setLiked] = useState(false);
  const [likes, setLikes] = useState(32);
  const handleLike = () => {
    setLiked(true);
    setLikes((prevLikes) => prevLikes + 1);
  };
  const handleUnlike = () => {
    setLiked(false);
    setLikes((prevLikes) => prevLikes - 1);
  };

  return (
    <>
      <>
        <Card>
          <CardHeader
            avatar={
              <CustomAvatar src={user?.photoURL} alt={user?.displayName} name={user?.displayName} />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <Link color="inherit" variant="subtitle2">
                {user?.displayName}
              </Link>
            }
            subheader={
              <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
                {new Date().getFullYear()}
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis rem quis ipsam id
              facilis porro aspernatur nostrum vitae eius ex.
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            height="290"
            image="https://api-dev-minimal-v4.vercel.app/assets/images/covers/cover_1.jpg"
            alt="Paella dish"
          />

          <CardActions sx={{ width: '100%', position : "relative" }}>
            <Stack  direction="row" justifyContent="space-between">
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="error"
                      checked={isLiked}
                      icon={<Iconify icon="eva:heart-fill" />}
                      checkedIcon={<Iconify icon="eva:heart-fill" />}
                      onChange={isLiked ? handleUnlike : handleLike}
                    />
                  }
                  label={likes}
                />
                <AvatarGroup max={4}>
                  {_userFollowers.map((item) => (
                    <>
                      <Avatar alt="Remy Sharp" src={item.avatarUrl} />
                    </>
                  ))}
                </AvatarGroup>
              </>
              <IconButton sx={{position : "absolute", top : 8, right : 4}} aria-label="share">
                <ShareIcon />
              </IconButton>
            </Stack>
          </CardActions>
            <TextField sx={{p : 2}} fullWidth  size='small' />
        </Card>
      </>
    </>
  );
}

export default ImageSide;
