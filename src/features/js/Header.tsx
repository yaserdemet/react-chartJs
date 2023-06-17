import Slider from 'react-slick';
import { useTheme } from '@emotion/react';
import { Card, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import {
  ComingSoonIllustration,
  MotivationIllustration,
  SeoIllustration,
  UpgradeStorageIllustration,
} from 'src/assets/illustrations';
import Iconify from 'src/components/iconify/Iconify';

export default function Header() {
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: 'slick-dots slick-thumb',
    // fade: true,
    // className: "center",
    // centerMode: true,
  };
  return (
    <>
      <>
        <Grid mb={4} container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card
              style={{ backgroundColor: '#8dd9b377' }}
              sx={{ px: 2, py: 3, backgroundColor: 'success' }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <Typography
                    textAlign={{ xs: 'center', md: 'left' }}
                    style={{ color: '#1f8b57' }}
                    paragraph
                    variant="h4"
                  >
                    Welcome Back !
                  </Typography>
                  <Typography
                    textAlign={{ xs: 'center', md: 'left' }}
                    style={{ color: '#288658' }}
                    variant="body2"
                  >
                    This page created for write \n down usefull fronted informations
                  </Typography>
                </Grid>
                <Grid px={2} item xs={8} md={4}>
                  <Slider {...settings}>
                    <SeoIllustration />
                    <MotivationIllustration />
                    <UpgradeStorageIllustration />
                    <ComingSoonIllustration />
                  </Slider>
                </Grid>
              </Grid>
            </Card>
          </Grid>
       
        </Grid>
      </>
    </>
  );
}
