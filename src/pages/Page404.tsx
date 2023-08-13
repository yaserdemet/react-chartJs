import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Button, Typography } from '@mui/material';
// components
import { MotionContainer, varBounce } from '../components/animate';
// assets
import { PageNotFoundIllustration } from '../assets/illustrations';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function Page404() {
  useEffect(() => {
    throw new Error();
  }, []);

  return (
    <>
      {/*  // ? THIS PAGE SIMULATE THROW NEW ERROR THEN TO PREVENT WHITE PAGE SHOW ERROR BOUNDRIES PAGE */}
    </>
  );
}
