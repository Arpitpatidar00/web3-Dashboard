'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D61D64',
      light: '#FF0DB7',
      dark: '#A31650',
    },
    secondary: {
      main: '#FF0DB7',
    },
    background: {
      default: '#0C0E12',
      paper: 'rgba(34, 34, 35, 0.40)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(217, 217, 217, 0.34)',
    },
    success: {
      main: '#22C55E',
    },
    divider: '#2D2F33',
    custom: {
      cardBg: 'rgba(34, 34, 35, 0.30)',
      cardBgStrong: 'rgba(34, 34, 35, 0.40)',
      searchBg: 'rgba(54, 54, 54, 0.20)',
      borderColor: '#2D2F33',
      bottomBarBg: 'rgba(34, 34, 35, 0.60)',
      glowPink: '#FF0DB7',
      accentPink: '#D61D64',
      textMuted: 'rgba(217, 217, 217, 0.34)',
      textDimmed: 'rgba(217, 217, 217, 0.54)',
      gradientPinkStart: 'rgba(224, 40, 112, 0.58)',
      gradientOrangeEnd: 'rgba(249, 104, 62, 0.85)',
      surfaceDark: '#222223',
    },
  },
  typography: {
    fontFamily: '"Barlow Condensed", sans-serif',
    h1: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 700,
      fontSize: '36px',
      lineHeight: '43.2px',
      letterSpacing: '2.88px',
    },
    h2: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '28.8px',
      letterSpacing: '1.92px',
    },
    h3: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '21.6px',
      letterSpacing: '1.44px',
    },
    body1: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '16.8px',
      letterSpacing: '1.12px',
    },
    body2: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '14.4px',
      letterSpacing: '0.96px',
    },
    caption: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 400,
      fontSize: '10px',
      lineHeight: '12px',
      letterSpacing: '0.8px',
    },
    button: {
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '16.8px',
      letterSpacing: '1.12px',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 1,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: '#0C0E12',
          overflow: 'hidden',
        },
        '*': {
          boxSizing: 'border-box',
        },
        '::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
        },
        '::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#2D2F33',
          borderRadius: '4px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
          fontFamily: '"Barlow Condensed", sans-serif',
          fontWeight: 700,
          letterSpacing: '1.12px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

// Extend MUI theme types
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      cardBg: string;
      cardBgStrong: string;
      searchBg: string;
      borderColor: string;
      bottomBarBg: string;
      glowPink: string;
      accentPink: string;
      textMuted: string;
      textDimmed: string;
      gradientPinkStart: string;
      gradientOrangeEnd: string;
      surfaceDark: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      cardBg?: string;
      cardBgStrong?: string;
      searchBg?: string;
      borderColor?: string;
      bottomBarBg?: string;
      glowPink?: string;
      accentPink?: string;
      textMuted?: string;
      textDimmed?: string;
      gradientPinkStart?: string;
      gradientOrangeEnd?: string;
      surfaceDark?: string;
    };
  }
}

export default theme;
