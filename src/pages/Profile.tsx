import { Helmet } from 'react-helmet-async';
// @mui
import { useState } from 'react';
import { Container, Stack, Typography, Box, Grid } from '@mui/material';
// components
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import Header from 'src/features/profile/Header';
import ProfileInfo from 'src/features/profile/ProfileFollowingCount';
import Friends from 'src/features/profile/Followers';
import ProfileAbout from 'src/features/profile/ProfileAbout';
import { _userFriends } from 'src/_mock/arrays';
import ProfileFriends from 'src/features/profile/ProfileFriends';
import Social from 'src/features/profile/Social';
import ImageSide from 'src/features/profile/ImageSide';
import { useSettingsContext } from '../components/settings';
import { m, AnimatePresence } from 'framer-motion';

// ----------------------------------------------------------------------

export default function PageFour() {
  const { themeStretch } = useSettingsContext();
  const [currentTab, setCurrentTab] = useState('Profile');
  const [searchFriends, setSearchFriends] = useState('');
  const [all, setAll] = useState(false);

  return (
    <>
      <Helmet>
        <title> Profile | Usefull Frontend</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <CustomBreadcrumbs
          heading="Profile"
          links={[
            {
              name: 'Dashboard',
              href: 'PATH_DASHBOARD.root',
            },
            {
              name: 'Blog',
              href: 'PATH_DASHBOARD.blog.root',
            },
            {
              name: 'Create',
            },
          ]}
        />

        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

        <>
          {currentTab === 'Profile' && (
            <Grid mt={4} container spacing={4}>
              <Grid item xs={12} md={4}>
                <ProfileInfo /> <ProfileAbout />
                <Social />
              </Grid>
              <Grid xs={12} md={8} item>
                <ImageSide />
              </Grid>
            </Grid>
          )}
          <AnimatePresence>
            {/* animatePresence conditional durumda kullanılır. exit ile animasyonu bitirir. */}
            {currentTab === 'Friends' && (
              <Box
                component={m.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Friends />
              </Box>
            )}
          </AnimatePresence>
          {currentTab === 'Followers' && (
            <ProfileFriends
              friends={_userFriends}
              searchFriends={searchFriends}
              onSearchFriends={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSearchFriends(event.target.value)
              }
            />
          )}
        </>
      </Container>
    </>
  );
}
