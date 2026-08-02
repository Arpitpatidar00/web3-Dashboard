'use client';

import React from 'react';
import Box from '@mui/material/Box';
import AppGlassCard from '@/components/common/AppGlassCard';
import AppTypography from '@/components/common/AppTypography';
import Image from 'next/image';
import { CRYPTO_WALLETS } from '@/constants';

/* ─── Crypto Wallet Row ─── */
interface CryptoRowProps {
  symbol: string;
  name: string;
  balance: string;
  balanceINR: string;
  holdAmount: string;
  stakedAmount: string;
}

const CryptoRow: React.FC<CryptoRowProps> = React.memo(
  ({ symbol, name, balance, balanceINR, holdAmount, stakedAmount }) => {
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '2fr 3fr 1.2fr 1.2fr 2fr',
          alignItems: 'center',
          width: '100%',
          height: 72,
          p: '14px 20px',
          borderRadius: '4px',
          backgroundColor: '#22222366',
          border: '1px solid #FFFFFF14',
          backdropFilter: 'blur(16px)',
        }}
      >
        {/* Left: Reorder + Logo + Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Image src="/modules/dashboard/Reorder dots.svg" alt="reorder" width={16} height={16} style={{ opacity: 1, cursor: 'grab' }} />
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Image src="/tokens/bitcoin.svg" alt="bitcoin" width={36} height={36} />
          </Box>
          <Box sx={{ minWidth: 100 }}>
            <AppTypography variant="body1Semibold" color="#D9D9D9">
              {symbol}
            </AppTypography>
            <AppTypography variant="smallBold" color="#D9D9D980">
              {name}
            </AppTypography>

          </Box>
        </Box>

        {/* Balance */}
        <Box sx={{ textAlign: 'right' }}>
          <AppTypography variant="subtitle1" color="#D9D9D9" sx={{ textAlign: 'right' }}>
            {balance}
          </AppTypography>
          <AppTypography variant="body1Bold" color="#D9D9D980" sx={{ textAlign: 'right' }}>
            {balanceINR}
          </AppTypography>

        </Box>

        {/* Hold */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <AppTypography variant="subtitle1" color="#D9D9D9" sx={{ textAlign: 'right' }}>
              Hold
            </AppTypography>
            <Image src="/modules/dashboard/eye-off.svg" alt="eye off" width={14} height={14} style={{ opacity: 0.5 }} />
          </Box>
          <AppTypography variant="body1Bold" color="#D9D9D980" sx={{ textAlign: 'right' }}>
            {holdAmount}
          </AppTypography>
        </Box>

        {/* Staked */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <AppTypography variant="subtitle1" color="#D9D9D9" sx={{ textAlign: 'right' }}>
              Staked
            </AppTypography>
            <Image src="/modules/dashboard/eye-off.svg" alt="eye off" width={14} height={14} style={{ opacity: 0.5 }} />
          </Box>
          <AppTypography variant="body1Bold" color="#D9D9D980" sx={{ textAlign: 'right' }}>
            {stakedAmount}
          </AppTypography>
        </Box>

        {/* Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12 }}>
          <AppTypography
            variant="body1Semibold"
            color="#D9D9D9"
            sx={{
              textAlign: 'center',
              textDecoration: 'underline',
              textDecorationStyle: 'solid',
              textDecorationOffset: '0%',
              textDecorationThickness: '0%',
              textDecorationSkipInk: 'auto',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
          >
            Convert
          </AppTypography>
          <AppTypography
            variant="body1Semibold"
            color="#D9D9D9"
            sx={{
              textAlign: 'center',
              textDecoration: 'underline',
              textDecorationStyle: 'solid',
              textDecorationOffset: '0%',
              textDecorationThickness: '0%',
              textDecorationSkipInk: 'auto',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
          >
            Earn
          </AppTypography>

        </Box>
      </Box>
    );
  }
);

CryptoRow.displayName = 'CryptoRow';

/* ─── Crypto Wallets Section ─── */
const CryptoWallets: React.FC = React.memo(() => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 28,
        }}
      >
        <AppTypography variant="subtitle1" color="#D9D9D980">
          Crypto Wallets
        </AppTypography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* Manage Assets */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
          >
            <Image src="/modules/dashboard/coins-swap-02.svg" alt="manage" width={16} height={16} style={{ opacity: 1 }} />
            <AppTypography variant="body1Bold" color="#D9D9D9">
              Manage Assets
            </AppTypography>
          </Box>

          {/* Sort */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
          >
            <Image src="/modules/dashboard/filter-lines.svg" alt="sort" width={16} height={16} style={{ opacity: 1 }} />
            <AppTypography variant="body1Bold" color="#D9D9D9">
              Sort
            </AppTypography>
          </Box>
        </Box>
      </Box>

      {/* Crypto Rows */}
      {CRYPTO_WALLETS.map((wallet) => (
        <CryptoRow
          key={wallet.symbol}
          symbol={wallet.symbol}
          name={wallet.name}
          balance={wallet.balance}
          balanceINR={wallet.balanceINR}
          holdAmount={wallet.holdAmount}
          stakedAmount={wallet.stakedAmount}
        />
      ))}
    </Box>
  );
});

CryptoWallets.displayName = 'CryptoWallets';

export default CryptoWallets;
