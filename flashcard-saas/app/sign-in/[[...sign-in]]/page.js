"use client";

import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar } from '@mui/material';
import { SignIn, useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const { isSignedIn } = useAuth(); // Get the authentication status
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      // If already signed in, redirect to the desired page
      router.push('/generate');
    }
  }, [isSignedIn, router]);

  return (
    <div style={{ backgroundColor: '#073B73', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#073B73', boxShadow: 'none', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'center', padding: 0, paddingTop: 4 }}>
          <Box
            sx={{
              backgroundColor: '#79c9fa',
              padding: '10px 30px',
              borderRadius: '8px',
            }}
          >
            <Typography variant="h4" component="h1" color="white" sx={{ letterSpacing: '0.3rem' }}>
              LOG IN
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sign-In Section */}
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: 'center', my: 4 }}
        >
          <SignIn afterSignInUrl="/generate" />
        </Box>
      </Container>
    </div>
  );
}



