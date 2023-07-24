import React from 'react';
import { Stack, Card, Avatar, Typography, Box } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';
import { CustomAvatar } from 'src/components/custom-avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useAuthContext } from 'src/auth/useAuthContext';
import User from '../../assets/illustrations/overlay_2.jpg';

function Header({currentTab, setCurrentTab} : any) {
  const { user, logout } = useAuthContext();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Card
        sx={{
          backgroundImage: `url(${User})`, // Add "url()" around the image URL
          py: 12,
          px: 2,
          overflow: 'visible',
        }}
      >
        <CustomAvatar
          sx={{ width: 128, height: 128, position: 'absolute', bottom: -24 }}
          src={user?.photoURL}
          alt={user?.displayName}
          name={user?.displayName}
        />
        <Typography
          variant="h4"
          sx={{ position: 'absolute', bottom: 36, left: 160, color: blueGrey[900] }}
        >
          
          {user?.displayName}
        </Typography>
        <Typography
          sx={{ position: 'absolute', bottom: 4, opacity: 0.72, left: 160, color: blueGrey[900] }}
        >
          {user?.role}
        </Typography>
      </Card>
      <>
        <Tabs
          sx={{
            width: 1,

            '& .MuiTabs-flexContainer': {
              justifyContent: {
                sm: 'center',
                md: 'flex-end',
              },
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
        >
          <Tab onClick={() => setCurrentTab("Profile")} icon={<PhoneIcon />} iconPosition="start" label="Profile" />
          <Tab onClick={() => setCurrentTab("Friends")} icon={<PersonPinIcon />} iconPosition="start" label="Friends" />
          <Tab onClick={() => setCurrentTab("Followers")} icon={<FavoriteIcon />} iconPosition="start" label="Favorite" />
        </Tabs>
      </>
    </>
  );
}

export default Header;
