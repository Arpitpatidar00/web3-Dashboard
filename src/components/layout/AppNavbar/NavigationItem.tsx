'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import AppTypography from '@/components/common/AppTypography';

interface NavigationItemProps {
  label: string;
  icon: string;
  active?: boolean;
  badge?: number;
  hasDropdown?: boolean;
}

const iconMap: Record<string, string> = {
  grid: '/icons/sidebar/grid-01.svg',
  link: '/icons/sidebar/link-01.svg',
  faucet: '/icons/sidebar/coins-hand.svg',
  monitor: '/icons/sidebar/tv-01.svg',
  compass: '/icons/sidebar/magic-wand-01.svg',
  grid4: '/icons/sidebar/grid-2x2.svg',
  shoppingBag: '/icons/navbar/shopping-bag-02.svg',
};

const NavigationItem: React.FC<NavigationItemProps> = React.memo(
  ({ label, icon, active = false, badge, hasDropdown = false }) => {
    const iconPath = iconMap[icon];

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '214px',
          height: 38,
          py: '8px',
          px: '14px',
          gap: '14px',
          borderRadius: '8px',
          backgroundColor: active ? '#D61D64' : 'transparent',
          boxShadow: active ? '0px 4px 29.5px 0px #146EF52E' : 'none',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          boxSizing: 'border-box',
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            backgroundColor: active ? '#D61D64' : 'rgba(255, 255, 255, 0.04)',
          },
        }}
      >
        {/* Active item glow ellipse */}
        {active && (
          <Box
            sx={{
              position: 'absolute',
              left: -162,
              top: -47,
              width: 191,
              height: 151,
              borderRadius: '50%',
              background: 'rgba(255, 13, 183, 0.38)',
              filter: 'blur(170px)',
              opacity: 0.8,
              transform: 'rotate(76.6deg)',
              pointerEvents: 'none',
            }}
          />
        )}

        {iconPath && (
          <Image
            src={iconPath}
            alt={label}
            width={20}
            height={20}
            style={{
              opacity: active ? 1 : 0.54,
              flexShrink: 0,
              position: 'relative',
              zIndex: 1,
            }}
          />
        )}

        <AppTypography
          variant="h3Nav"
          color={active ? '#FFFFFF' : '#D9D9D9'}
          sx={{
            flex: 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {label}
        </AppTypography>

        {badge !== undefined && (
          <AppTypography
            variant="h3NavLight"
            color="rgba(217, 217, 217, 0.54)"
            sx={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            {badge}
          </AppTypography>
        )}

        {hasDropdown && (
          <Image
            src="/icons/sidebar/chevron-down.svg"
            alt="dropdown"
            width={16}
            height={16}
            style={{
              opacity: 0.54,
              position: 'relative',
              zIndex: 1,
            }}
          />
        )}
      </Box>
    );
  }
);

NavigationItem.displayName = 'NavigationItem';

export default NavigationItem;
