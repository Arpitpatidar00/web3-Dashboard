'use client';

import React from 'react';
import Box from '@mui/material/Box';
import AppTypography from '@/components/common/AppTypography';
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from 'recharts';
import ActionButton from '@/components/common/ActionButton';
import Image from 'next/image';
import { CHART_DATA, TIME_FILTERS } from '@/constants';
import AppGlassCard from '@/components/common/AppGlassCard';

/* ─── Custom Tooltip ─── */
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

const DAY_FULL_NAMES: Record<string, string> = {
  M: 'Monday',
  T: 'Thursday',
  W: 'Wednesday',
  F: 'Friday',
  S: 'Saturday',
};

const CustomChartTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '84px',
          height: '53px',
          pt: '10px',
          pr: '8px',
          pb: '10px',
          pl: '8px',
          gap: '6px',
          borderRadius: '4px',
          backgroundColor: '#FFFFFFB2',
          backdropFilter: 'blur(16px)',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.4)',
        }}
      >
        <AppTypography variant="smallBold" color="#0C0E12">
          {DAY_FULL_NAMES[label || ''] || label}
        </AppTypography>
        <AppTypography variant="captionBold" color="#0C0E12">
          {payload[0].value.toFixed(2)}BTC
        </AppTypography>

      </Box>
    );
  }
  return null;
};

/* ─── Balance Card Component ─── */
const BalanceCard: React.FC = React.memo(() => {
  const [activeFilter, setActiveFilter] = React.useState('7D');

  return (
    <AppGlassCard
      opacity={0.3}
      blurRadius={16}
      borderRadius={4}
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        width: '100%',
        minHeight: '231.87px',
        p: '20px',
        background: 'linear-gradient(90deg, rgba(34, 34, 35, 0.3) 0%, rgba(34, 34, 35, 0.3) 100%)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* ─── Left: Balance Info + Actions ─── */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '35%',
          flexShrink: 0,
          gap: 14,
        }}
      >
        {/* Total Balance Header */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <AppTypography variant="subtitle1" color="#FFFFFF">
              Total Balance
            </AppTypography>
            <Image src="/modules/dashboard/eye.svg" alt="eye" width={16} height={16} style={{ opacity: 1, cursor: 'pointer' }} />
          </Box>

          {/* Balance Amount */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <AppTypography variant="h1Balance" color="#FFFFFF">
              258346.00 BTC
            </AppTypography>
            {/* Green Badge */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                px: 8,
                py: 4,
                backgroundColor: '#69E51114',
                borderRadius: '4px',
              }}
            >
              <Image src="/modules/dashboard/trend-up-01.svg" alt="trend up" width={12} height={12} />
              <AppTypography variant="smallBold" color="#22C55E">
                15%
              </AppTypography>
            </Box>
          </Box>

          {/* INR Equivalent */}
          <AppTypography variant="body1Bold" color="rgba(217, 217, 217, 0.34)">
            ≈ 25,000 INR
          </AppTypography>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ActionButton variant="pink">Deposit</ActionButton>
          <ActionButton variant="glassDark">Buy Crypto</ActionButton>
          <ActionButton variant="glassDark">Withdraw</ActionButton>

          {/* Copy Button */}
          <ActionButton
            variant="glassDark"
            sx={{
              width: '39px',
              height: '39px',
              minWidth: '39px',
              p: 0,
            }}
          >
            <Image src="/modules/dashboard/file-05.svg" alt="copy" width={18} height={18} style={{ opacity: 0.8 }} />
          </ActionButton>
        </Box>
      </Box>

      {/* ─── Right: Chart ─── */}
      <Box sx={{ width: '65%', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 160 }}>
        {/* Time Filters */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 6,
          }}
        >
          {TIME_FILTERS.map((filter) => (
            <ActionButton
              key={filter}
              variant={activeFilter === filter ? 'glassGrey' : 'glassDark'}
              onClick={() => setActiveFilter(filter)}
              sx={{
                width: 'auto',
                minWidth: '34px',
                height: '29px',
                px: '10px',
                py: '6px',
                fontSize: '12px',
                fontWeight: activeFilter === filter ? 700 : 400,
                color: activeFilter === filter ? '#FFFFFF' : 'rgba(217, 217, 217, 0.70)',
              }}
            >
              {filter}
            </ActionButton>
          ))}
        </Box>

        {/* Chart */}
        <Box sx={{ flex: 1, width: '100%', minHeight: 130 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={CHART_DATA}
              margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D61D64" stopOpacity={0.4} />
                  <stop offset="82.4%" stopColor="rgba(214, 29, 100, 0)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: 'rgba(217, 217, 217, 0.34)',
                  fontSize: 11,
                  fontFamily: '"Barlow Condensed", sans-serif',
                  letterSpacing: '0.88px',
                }}
                dy={8}
              />
              <Tooltip
                content={<CustomChartTooltip />}
                cursor={{
                  stroke: '#D61D64',
                  strokeWidth: 1.03,
                  strokeDasharray: '3 3',
                }}
              />
              <Area
                type="natural"
                dataKey="value"
                stroke="#D61D64"
                strokeWidth={2}
                fill="url(#chartGradient)"
                dot={false}
                activeDot={{
                  r: 6,
                  fill: '#FFFFFF',
                  stroke: '#D61D64',
                  strokeWidth: 2,
                }}
              />
              <ReferenceDot
                x="F"
                y={2586}
                r={6}
                fill="#FFFFFF"
                stroke="#D61D64"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </AppGlassCard>
  );
});

BalanceCard.displayName = 'BalanceCard';

export default BalanceCard;
