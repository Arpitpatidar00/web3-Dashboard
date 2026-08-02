'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface AppLogoProps {
  width?: number;
  height?: number;
  priority?: boolean;
}

const AppLogo: React.FC<AppLogoProps> = React.memo(({ width = 212, height = 44, priority = true }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <Image
        src="/logo/Logo.svg"
        alt="OREBiT Logo"
        width={width}
        height={height}
        priority={priority}
      />
    </Box>
  );
});

AppLogo.displayName = 'AppLogo';

export default AppLogo;
