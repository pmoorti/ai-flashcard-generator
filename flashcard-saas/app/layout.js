"use client"; // Add this to indicate a client component
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme.js';
import { ClerkProvider } from '@clerk/nextjs';
import '../styles/globals.css'; // Ensure the path is correct
import CssBaseline from '@mui/material/CssBaseline';


export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} >
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <html lang="en">
          <body>{children}</body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}

