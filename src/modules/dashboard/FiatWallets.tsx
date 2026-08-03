'use client';

import React from 'react';
import Box from '@mui/material/Box';
import AppTypography from '@/components/common/AppTypography';
import Image from 'next/image';
import { FIAT_WALLETS } from '@/constants';

/* ─── Single Fiat Wallet Card ─── */
interface FiatCardProps {
  code: string;
  name: string;
  amount: string;
  amountINR: string;
  flagEmoji?: string;
  flagIcon?: string;
}

const FiatCard: React.FC<FiatCardProps> = React.memo(
  ({ code, name, amount, amountINR, flagEmoji, flagIcon }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          minWidth: 280,
          height: 64,
          p: '14px',
          gap: '12px',
          borderRadius: '4px',
          backgroundColor: '#22222366',
          border: '1px solid #FFFFFF14',
          backdropFilter: 'blur(16px)',
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Flag */}
          {flagIcon ? (
            <Image
              src={flagIcon}
              alt={`${name} flag`}
              width={34}
              height={34}
              style={{ objectFit: 'contain', flexShrink: 0 }}
            />
          ) : (
            <AppTypography sx={{ fontSize: '24px' }}>{flagEmoji}</AppTypography>
          )}
          {/* Name */}
          <Box>
            <AppTypography variant="body1Bold" color="#FFFFFF">
              {code}
            </AppTypography>
            <AppTypography variant="smallRegular" color="#D9D9D980">
              {name}
            </AppTypography>

          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Box sx={{ textAlign: 'right' }}>
            <AppTypography variant="body1Bold" color="#FFFFFF">
              {amount}
            </AppTypography>
            <AppTypography variant="smallRegular" color="#D9D9D980">
              {amountINR}
            </AppTypography>

          </Box>
          <Box
            sx={{
              cursor: 'pointer',
              '&:hover': { opacity: 0.7 },
            }}
          >
            <Image src="/icons/footer/dots-vertical.svg" alt="more" width={16} height={16} style={{ opacity: 1 }} />
          </Box>
        </Box>
      </Box>
    );
  }
);

FiatCard.displayName = 'FiatCard';

/* ─── Fiat Wallets Section ─── */
const FiatWallets: React.FC = React.memo(() => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 28,
          gap: 14,
        }}
      >
        <AppTypography variant="subtitle1" color="#D9D9D980">
          Fiat Wallets
        </AppTypography>
      </Box>

      {/* Cards Row */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          gap: 12,
          overflowX: 'auto',
          pb: 1,
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {FIAT_WALLETS.map((wallet) => (
          <FiatCard
            key={wallet.code}
            code={wallet.code}
            name={wallet.name}
            amount={wallet.amount}
            amountINR={wallet.amountINR}
            flagEmoji={wallet.flagEmoji}
            flagIcon={wallet.flagIcon}
          />
        ))}

        {/* Add More Fiats */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 194,
            minWidth: 194,
            height: 64,
            pt: '20px',
            pr: '30px',
            pb: '20px',
            pl: '30px',
            gap: '8px',
            borderRadius: '4px',
            border: '1.5px dashed #FFFFFF4D',
            backdropFilter: 'blur(16px)',
            cursor: 'pointer',
            backgroundColor: "#22222399",
            flexShrink: 0,
            transition: 'all 0.2s ease',
            '&:hover': {
              borderColor: '#FFFFFF99',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
            },
          }}
        >
          <Image src="/modules/dashboard/plus.svg" alt="plus" width={16} height={16} style={{ opacity: 1 }} />
          <AppTypography variant="body1Bold" color="#FFFFFF" sx={{ whiteSpace: 'nowrap' }}>
            Add More Fiats
          </AppTypography>
        </Box>
      </Box>
    </Box>
  );
});

FiatWallets.displayName = 'FiatWallets';

export default FiatWallets;
