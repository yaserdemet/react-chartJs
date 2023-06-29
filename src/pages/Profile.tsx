import { Helmet } from 'react-helmet-async';
// @mui
import { useState } from 'react';
import { Container, Typography } from '@mui/material';
// components
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import Header from 'src/features/profile/Header';
import ProfileInfo from 'src/features/profile/ProfileFollowingCount';
import Friends from 'src/features/profile/Followers';
import ProfileAbout from 'src/features/profile/ProfileAbout';
import { _userFriends } from 'src/_mock/arrays';
import ProfileFriends from 'src/features/profile/ProfileFriends';
import Social from 'src/features/profile/Social';
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageFour() {
  const { themeStretch } = useSettingsContext();
  const [currentTab, setCurrentTab] = useState('Profile');
  const [searchFriends, setSearchFriends] = useState('');

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
        {currentTab === 'Profile' && (
          <>
            <ProfileInfo /> <ProfileAbout />
            <Social />
          </>
        )}
        {currentTab === 'Friends' && <Friends />}
        {currentTab === 'Followers' && (
          <ProfileFriends
            friends={_userFriends}
            searchFriends={searchFriends}
            onSearchFriends={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchFriends(event.target.value)
            }
          />
        )}
      </Container>
    </>
  );
}
