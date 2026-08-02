'use client';

import React from 'react';
import Box from '@mui/material/Box';
import AppNavbar from '../../AppNavbar';
import AppSidebar from '../../AppSidebar';
import AppFooter from '../../AppFooter';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0C0E12',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* ─── Header ─── */}
      <AppNavbar />

      {/* ─── Body: Sidebar + Content ─── */}
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <AppSidebar />
        <Box
          component="main"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>

      {/* ─── Bottom Bar ─── */}
      <AppFooter />
    </Box>
  );
};

export default DashboardLayout;
