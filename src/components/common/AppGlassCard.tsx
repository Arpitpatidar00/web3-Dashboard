'use client';

import React from 'react';
import Box from '@mui/material/Box';

interface GlassCardProps {
  children: React.ReactNode;
  sx?: object;
  opacity?: number;
  blurRadius?: number;
  borderRadius?: number;
  showBorder?: boolean;
}

const AppGlassCard: React.FC<GlassCardProps> = React.memo(
  ({
    children,
    sx = {},
    opacity = 0.3,
    blurRadius = 16,
    borderRadius = 4,
    showBorder = false,
  }) => {
    return (
      <Box
        sx={{
          background: `rgba(34, 34, 35, ${opacity})`,
          backdropFilter: `blur(${blurRadius}px)`,
          WebkitBackdropFilter: `blur(${blurRadius}px)`,
          borderRadius: `${borderRadius}px`,
          ...(showBorder && {
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }),
          ...sx,
        }}
      >
        {children}
      </Box>
    );
  }
);

AppGlassCard.displayName = 'AppGlassCard';

export default AppGlassCard;
