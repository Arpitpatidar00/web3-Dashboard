'use client';

import Box from '@mui/material/Box';
import DashboardLayout from '@/components/layout/Main/DashboardLayout';
import AnnouncementBar from '@/modules/dashboard/AnnouncementBar';
import AppBreadcrumb from '@/components/common/AppBreadcrumb';
import BalanceCard from '@/modules/dashboard/BalanceCard';
import FiatWallets from '@/modules/dashboard/FiatWallets';
import CryptoWallets from '@/modules/dashboard/CryptoWallets';

export const DashboardPage = () => {
    return (
        <DashboardLayout>
            {/* ─── Announcement Bar ─── */}
            <AnnouncementBar />

            {/* ─── Main Content Area ─── */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    px: 20,
                    py: 0,
                    gap: 10,
                    overflow: 'auto',
                }}
            >
                {/* Main scrollable content wrapper */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 18,
                        pb: 20,
                    }}
                >
                    {/* Breadcrumb Row + Action Button */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            pt: 14,
                        }}
                    >
                        <AppBreadcrumb showActionButton actionButtonLabel="+ Advertise Here" actionButtonVariant="dashed" />
                    </Box>

                    {/* Balance Card */}
                    <BalanceCard />

                    {/* Fiat Wallets */}
                    <FiatWallets />

                    {/* Crypto Wallets */}
                    <CryptoWallets />
                </Box>
            </Box>
        </DashboardLayout>
    );
}
