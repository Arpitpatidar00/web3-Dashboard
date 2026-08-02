'use client';

import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';

/* ─────────────────────────────────────────────────
 * AppTypography Variants
 *
 * Each variant maps 1-to-1 with a unique (fontSize, fontWeight, lineHeight, letterSpacing)
 * combination discovered in the Figma design. The color is intentionally left out of
 * variants so consumers pass it via the `color` prop or `sx`.
 * ───────────────────────────────────────────────── */

export type AppTypographyVariant =
  /* ── Headings & Display ── */
  | 'h1Balance'    // 36px / 700 / 43.2px / 2.88px — Balance display number
  | 'h3Nav'        // 18px / 700 / 100%   / 0.08em — Navigation labels, large titles
  | 'h3NavLight'   // 18px / 400 / 21.6px / 1.44px — Navigation badge count

  /* ── Subtitles (16px) ── */
  | 'subtitle1'    // 16px / 700 / 19.2px / 1.28px — Section titles, column headers
  | 'subtitle2'    // 16px / 600 / 100%   / 1.12px — Crypto symbol, semi-bold labels
  | 'subtitle3'    // 16px / 400 / 19.2px / 1.28px — Crypto balance value, lighter labels

  /* ── Body (14px) ── */
  | 'body1Bold'    // 14px / 700 / 16.8px / 1.12px — Bold labels, deposit text, card codes
  | 'body1Semibold'// 14px / 600 / 100%   / 1.12px — CTA links (Convert, Earn), buttons
  | 'body1Regular' // 14px / 400 / 16.8px / 1.12px — Regular text, language selector

  /* ── Captions (13px) ── */
  | 'captionBold'  // 13px / 700 / 15.6px / 0.96px — "You Won!" status text
  | 'captionRegular' // 13px / 400 / 15.6px / 0.96px — Status bar values (1.7%, 156, etc.)

  /* ── Small (12px) ── */
  | 'smallBold'    // 12px / 700 / 100%   / 0.08em — Section headers (EARNINGS), badges, sub-labels
  | 'smallRegular' // 12px / 400 / 14.4px / 0.96px — Fiat sub-text, secondary info

  /* ── Tiny (8px) ── */
  | 'tiny';        // 8px  / 700 / 1      / —      — Notification badge "99+"


/* ─── Variant Style Map ─── */
const VARIANT_STYLES: Record<AppTypographyVariant, React.CSSProperties> = {
  /* Headings */
  h1Balance: {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: '43.2px',
    letterSpacing: '2.88px',
  },
  h3Nav: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '100%',
    letterSpacing: '0.08em',
  },
  h3NavLight: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '21.6px',
    letterSpacing: '1.44px',
  },

  /* Subtitles */
  subtitle1: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '19.2px',
    letterSpacing: '1.28px',
  },
  subtitle2: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '100%',
    letterSpacing: '1.12px',
  },
  subtitle3: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '19.2px',
    letterSpacing: '1.28px',
  },

  /* Body */
  body1Bold: {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '16.8px',
    letterSpacing: '1.12px',
  },
  body1Semibold: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '100%',
    letterSpacing: '1.12px',
  },
  body1Regular: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16.8px',
    letterSpacing: '1.12px',
  },

  /* Captions */
  captionBold: {
    fontSize: '13px',
    fontWeight: 700,
    lineHeight: '15.6px',
    letterSpacing: '0.96px',
  },
  captionRegular: {
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '15.6px',
    letterSpacing: '0.96px',
  },

  /* Small */
  smallBold: {
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '100%',
    letterSpacing: '0.08em',
  },
  smallRegular: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '14.4px',
    letterSpacing: '0.96px',
  },

  /* Tiny */
  tiny: {
    fontSize: '8px',
    fontWeight: 700,
    lineHeight: 1 as unknown as string,
  },
};


/* ─── Component Props ─── */
export interface AppTypographyProps extends Omit<TypographyProps, 'variant'> {
  /** The design-token variant. Defaults to 'body1Regular'. */
  variant?: AppTypographyVariant;
  /** Shorthand color override — accepts any CSS color string. */
  color?: string;
}


/* ─── Component ─── */
const AppTypography = React.forwardRef<HTMLSpanElement, AppTypographyProps>(
  ({ variant = 'body1Regular', color, sx, children, ...rest }, ref) => {
    const style = VARIANT_STYLES[variant];

    const mergedSx: SxProps<Theme> = {
      fontFamily: '"Barlow Condensed", sans-serif',
      ...style,
      ...(color ? { color } : {}),
      ...(sx as object),
    };

    return (
      <Typography ref={ref} sx={mergedSx} {...rest}>
        {children}
      </Typography>
    );
  }
);

AppTypography.displayName = 'AppTypography';

export default AppTypography;

/* ─── Re-export variant styles for edge cases (charts, InputBase, etc.) ─── */
export { VARIANT_STYLES };
