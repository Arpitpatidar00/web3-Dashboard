import React from 'react';
import Box from '@mui/material/Box';
import AppTypography from '@/components/common/AppTypography';

const AnnouncementBar: React.FC = React.memo(() => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        mx: '20px',
        mt: '10px', // slight top margin so the shadow/top isn't clipped
        mb: '12px', // reserve space for the stacked pseudo-elements underneath
        height: 29,
        gap: '10px',
        paddingTop: '6px',
        paddingRight: '10px',
        paddingBottom: '6px',
        paddingLeft: '10px',
        borderRadius: '4px',
        position: 'relative',
        backgroundColor: '#201E24',
        boxShadow: '0px 4px 4px 0px #0000008C',
        backdropFilter: 'blur(16px)',
        zIndex: 1, // Ensure the main bar is above its pseudo-elements
        /* Middle stacked layer */
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 6,
          left: 0,
          right: 0,
          height: 29,
          backgroundColor: '#201E24',
          borderRadius: '4px',
          boxShadow: '0px 4px 4px 0px #0000008C',
          backdropFilter: 'blur(16px)',
          zIndex: -1,
        },
        /* Bottom stacked layer */
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 12,
          left: 0,
          right: 0,
          height: 29,
          backgroundColor: '#201E24',
          borderRadius: '4px',
          boxShadow: '0px 4px 4px 0px #0000008C',
          backdropFilter: 'blur(16px)',
          zIndex: -2,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          gap: 10,
        }}
      >
        {/* Green accent bar */}
        <Box
          sx={{
            width: 3,
            height: 28,
            backgroundColor: '#4ADE80',
            borderRadius: '2px',
            flexShrink: 0,
          }}
        />

        {/* Announcement text */}
        <AppTypography
          variant="body1Bold"
          color="#D9D9D9"
          sx={{ textAlign: 'center', flex: 1 }}
        >
          New Yield Opportunities Available, Explore top DeFi strategies and start earning today.{' '}
          <AppTypography
            component="span"
            variant="body1Semibold"
            color="#D61D64"
            sx={{
              textDecoration: 'underline',
              cursor: 'pointer',
              '&:hover': { opacity: 0.85 },
            }}
          >
            Start Earning
          </AppTypography>
        </AppTypography>

        {/* Close button */}
        <Box
          sx={{
            width: 20,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#D9D9D9',
            opacity: 0.8,
            '&:hover': { opacity: 1 },
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1L1 11M1 1L11 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
});

AnnouncementBar.displayName = 'AnnouncementBar';

export default AnnouncementBar;
