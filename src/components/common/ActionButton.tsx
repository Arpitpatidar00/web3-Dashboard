import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material/styles';

export type CustomButtonVariant = 'dashed' | 'pink' | 'glassDark' | 'glassGrey';

export interface ActionButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: CustomButtonVariant | ButtonProps['variant'];
}

const variantStyles: Record<CustomButtonVariant, SxProps<Theme>> = {
  dashed: {
    width: 142,
    height: 25,
    padding: '4px 16px',
    border: '1px dashed #FFFFFF4D',
    backdropFilter: 'blur(16px)',
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.70)',
    fontSize: '12px',
    '&:hover': {
      borderColor: '#FFFFFF99',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  },
  pink: {
    width: 90,
    height: 39,
    padding: '11px 10px',
    backgroundColor: '#D61D64',
    color: '#FFFFFF',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#B51652',
    },
  },
  glassDark: {
    width: 90,
    height: 39,
    padding: '11px 10px',
    backgroundColor: '#36363666',
    backdropFilter: 'blur(16px)',
    color: '#FFFFFF',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: 'rgba(54, 54, 54, 0.60)',
    },
  },
  glassGrey: {
    width: 34,
    height: 29,
    padding: '6px 10px',
    backgroundColor: '#646464E5',
    backdropFilter: 'blur(16px)',
    color: '#FFFFFF',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#7A7A7AE5',
    },
  },
};

const ActionButton: React.FC<ActionButtonProps> = ({
  variant = 'dashed',
  children,
  sx,
  ...props
}) => {
  const customVariant = variant as CustomButtonVariant;
  const isCustomVariant = variantStyles[customVariant] !== undefined;

  const baseSx: SxProps<Theme> = {
    textTransform: 'none',
    fontFamily: '"Barlow Condensed", sans-serif',
    fontWeight: 600,
    lineHeight: '100%',
    letterSpacing: '0.96px',
    borderRadius: '4px',
    minWidth: 'unset',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    transition: 'all 0.2s ease-in-out',
    ...(isCustomVariant ? variantStyles[customVariant] : {}),
    ...(sx as object),
  };

  return (
    <Button
      variant={isCustomVariant ? undefined : (variant as ButtonProps['variant'])}
      sx={baseSx}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
