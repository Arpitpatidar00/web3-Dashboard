import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import ActionButton, { CustomButtonVariant } from './ActionButton';
import AppTypography from '@/components/common/AppTypography';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: (string | BreadcrumbItem)[];
  actionButton?: React.ReactNode;
  showActionButton?: boolean;
  onActionButtonClick?: () => void;
  actionButtonLabel?: string;
  actionButtonVariant?: CustomButtonVariant;
}

const AppBreadcrumb: React.FC<BreadcrumbProps> = React.memo(
  ({
    items = ['User Panel', 'Dashboard'],
    actionButton,
    showActionButton,
    onActionButtonClick,
    actionButtonLabel = '+ Advertise Here',
    actionButtonVariant = 'dashed',
  }) => {
    const normalizedItems: BreadcrumbItem[] = items.map((item) =>
      typeof item === 'string' ? { label: item } : item
    );

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {normalizedItems.map((item, index) => {
            const isLast = index === normalizedItems.length - 1;
            return (
              <React.Fragment key={index}>
                <AppTypography
                  variant="body1Bold"
                  color={isLast ? '#D9D9D980' : '#D9D9D9'}
                  sx={{
                    cursor: isLast ? 'default' : 'pointer',
                    '&:hover': { color: isLast ? '#D9D9D9' : '#D9D9D9' },
                  }}
                >
                  {item.label}
                </AppTypography>
                {!isLast && (
                  <Image
                    src="/comman/chevron-right.svg"
                    alt="chevron right"
                    width={16}
                    height={16}
                    style={{ opacity: 0.6 }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </Box>

        {/* Conditional Action Button */}
        {actionButton ? (
          actionButton
        ) : showActionButton ? (
          <ActionButton
            variant={actionButtonVariant}
            onClick={onActionButtonClick}
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '100%',
              letterSpacing: '0.08em',
            }}
          >
            {actionButtonLabel}
          </ActionButton>
        ) : null}
      </Box>
    );
  }
);

AppBreadcrumb.displayName = 'AppBreadcrumb';

export default AppBreadcrumb;
