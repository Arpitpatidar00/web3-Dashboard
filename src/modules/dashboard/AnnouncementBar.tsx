import React from 'react';
import Box from '@mui/material/Box';
import AppTypography from '@/components/common/AppTypography';
import Image from 'next/image';

const AnnouncementBar: React.FC = React.memo(() => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        mx: '20px',
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
            height: 18,
            backgroundColor: '#69E511',
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

        <Box
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            '&:hover': { opacity: 1 },

          }}
        >
          <Image src="/modules/dashboard/x-close.svg" alt="close" width={16} height={16} />
        </Box>
      </Box>
    </Box>
  );
});

AnnouncementBar.displayName = 'AnnouncementBar';

export default AnnouncementBar;
