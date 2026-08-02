'use client';

import React from 'react';
import { Box, InputBase, InputBaseProps } from '@mui/material';
import Image from 'next/image';

export type AppInputVariant = 'glassDark' | 'default';

export interface AppInputProps extends Omit<InputBaseProps, 'variant'> {
  variant?: AppInputVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: string | number;
  height?: string | number;
}

export const AppInput: React.FC<AppInputProps> = ({
  variant = 'glassDark',
  leftIcon,
  rightIcon,
  width = '458.0045166015625px',
  height = 40,
  placeholder = 'Search',
  sx,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'glassDark':
      default:
        return {
          background: '#36363633',
          border: '1px solid #2D2F33',
          backdropFilter: 'blur(16px)',
          borderRadius: '4px',
        };
    }
  };

  return (
    <Box
      sx={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        p: '10px',
        boxSizing: 'border-box',
        flexShrink: 0,
        ...getVariantStyles(),
        ...sx,
      }}
    >
      {leftIcon ? leftIcon : (
        <Image
          src="/icons/navbar/search-sm.svg"
          alt="search"
          width={20}
          height={20}
          style={{ opacity: 1, flexShrink: 0 }}
        />
      )}
      <InputBase
        placeholder={placeholder}
        sx={{
          flex: 1,
          color: '#FFFFFF',
          fontFamily: '"Barlow Condensed", sans-serif',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0.08em',
          '& .MuiInputBase-input': {
            p: 0,
            color: '#FFFFFF',
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0.08em',
            '&::placeholder': {
              color: '#D9D9D980',
              opacity: 1,
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0.08em',
            },
          },
        }}
        {...props}
      />
      {rightIcon}
    </Box>
  );
};

export default AppInput;
