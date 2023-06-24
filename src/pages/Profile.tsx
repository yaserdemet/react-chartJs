import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
// components
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/CustomBreadcrumbs';
import Header from 'src/features/profile/Header';
import ProfileInfo from 'src/features/profile/ProfileFollowingCount';
import ProfileAbout from 'src/features/profile/ProfileAbout';
import Social from 'src/features/profile/Social';
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageFour() {
  const { themeStretch } = useSettingsContext();

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

        <Header />
        <ProfileInfo />
        <ProfileAbout />
        <Social />
      </Container>
    </>
  );
}
