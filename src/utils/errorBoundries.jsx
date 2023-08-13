import React from 'react';
import PageSix from 'src/pages/ErrorPage';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { Button, Typography } from '@mui/material';
// components
import { MotionContainer, varBounce } from '../components/animate';
// assets
import { ForbiddenIllustration } from '../assets/illustrations';
import { useEffect, useState } from 'react';
import CompactLayout from 'src/layouts/compact/CompactLayout';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <MotionContainer>
            <m.div variants={varBounce().in}>
              <Typography align="center" variant="h3" paragraph>
                No permission
              </Typography>
            </m.div>

            <m.div variants={varBounce().in}>
              <Typography align="center" sx={{ color: 'text.secondary' }}>
                The page you&apos;re trying access has restricted access.
                <br />
                Please refer to your system administrator
              </Typography>
            </m.div>

            <m.div variants={varBounce().in}>
              <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
            </m.div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={() => window.history.back()} size="large" variant="contained">
                Go to Home
              </Button>
            </div>
          </MotionContainer>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
