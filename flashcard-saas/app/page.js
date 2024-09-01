"use client"; // Add this directive at the top
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, AppBar, Toolbar, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs'; // Import Clerk's useAuth to handle sign-out

export default function HomePage() {
  const router = useRouter();
  const { signOut } = useAuth(); // Get the signOut function

  const handleGetStarted = async () => {
    await signOut(); // Force sign-out to ensure the user is redirected to the sign-in page
    router.push('/sign-in');
  };

  return (
    <div style={{ backgroundColor: '#073B73', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: '#073B73', boxShadow: 'none', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/assets/rocket-logo.png" alt="Reviso Logo" style={{ height: 150, marginRight: 16, paddingTop: 25, paddingBottom: 25, borderRadius: 10 }} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Left Section */}
        <Grid item xs={12} sm={3} sx={{ textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ backgroundColor: '#f974a6', height: '300px', width: '100%', borderRadius: 30, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6">Your favorite study tool</Typography>
          </Box>
          <Box sx={{ backgroundColor: '#ffa5c6', height: '300px', width: '100%', borderRadius: 30, mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6">AI-generated custom flashcards</Typography>
          </Box>
        </Grid>

        {/* Center Section */}
        <Grid item xs={12} sm={5} sx={{ textAlign: 'center', color: 'white' }}>
          <Box sx={{ backgroundColor: '#79c9fa', borderRadius: 20, p: 4, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '650px' }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#f974a6', 
                fontWeight: 'bold', 
                letterSpacing: '0.3rem', 
                mb: 4,
                backgroundColor: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                display: 'inline-block',
              }}
            >
              R E V I S O
            </Typography>
            <img src="/assets/rocket-launch.png" alt="Rocket Launch" style={{ height: 400 }} />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#f974a6',
                color: 'white',
                mt: 4,
                fontWeight: 'bold',
                fontSize: '1rem',
                padding: '10px 20px',
                borderRadius: 4,
                '&:hover': {
                  backgroundColor: '#ffa5c6',
                },
              }}
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} sm={3} sx={{ textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ backgroundColor: '#ffa5c6', height: '300px', width: '100%', borderRadius: 30, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6">Revisit previous flashcard decks</Typography>
          </Box>
          <Box sx={{ backgroundColor: '#f974a6', height: '300px', width: '100%', borderRadius: 30, mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6">Coming soon: Upload PDFs and YouTube links</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
