import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Link, Stack, MenuItem, InputAdornment, Grid } from '@mui/material';
import { useAuthContext } from 'src/auth/useAuthContext';
import { CustomAvatar } from 'src/components/custom-avatar';

function ImageSide() {
  const { user } = useAuthContext();
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
          <CardMedia
            component="img"
            height="194"
            image="https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_2.jpg"
            alt="Paella dish"
          />
          {/* <img
            style={{ padding: 24, borderRadius: '20px' }}
            width="100%"
            src="https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_2.jpg"
            alt=""
          /> */}
        </Card>
      </>
    </>
  );
}

export default ImageSide;
