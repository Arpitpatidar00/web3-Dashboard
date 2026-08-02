import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import AppTypography from '@/components/common/AppTypography';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = React.memo(({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: 8,
        py: 0,
      }}
    >
      <AppTypography
        variant="smallBold"
        color="#D9D9D957"
        sx={{
          height: 14,
          display: 'flex',
          alignItems: 'center',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </AppTypography>
      <Image
        src="/icons/sidebar/arrow_drop_down.svg"
        alt="arrow up"
        width={14}
        height={14}
        style={{ opacity: 1 }}
      />
    </Box>
  );
});

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
