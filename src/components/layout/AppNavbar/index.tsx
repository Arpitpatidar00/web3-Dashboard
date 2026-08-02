import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import AppLogo from '@/components/common/AppLogo';
import AppInput from '@/components/common/AppInput';
import AppTypography from '@/components/common/AppTypography';

const AppNavbar: React.FC = React.memo(() => {
    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: 84,
                px: '20px',
                py: '20px',
                gap: '24px',
                position: 'relative',
                backgroundColor: '#0C0E12',
                borderBottom: '1px solid',
                borderImageSource: 'linear-gradient(90deg, rgba(45, 47, 51, 0.2) 0%, #2D2F33 8.65%, #2D2F33 90.38%, rgba(45, 47, 51, 0.2) 100%)',
                borderImageSlice: 1,
            }}
        >
            {/* ─── Left: Logo + Search ─── */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: '16px', lg: '42px' },
                    height: 44,
                    flexShrink: 1,
                    minWidth: 0,
                }}
            >
                {/* Logo (Frame: width 212px, height 44px, gap 24px) */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 212,
                        height: 44,
                        gap: '24px',
                        flexShrink: 0,
                    }}
                >
                    {/* OREBiT Logo */}
                    <AppLogo width={212} height={44} />
                </Box>

                {/* Search Input */}
                <AppInput variant="glassDark" placeholder="Search" sx={{ width: { xs: '220px', md: '320px', xl: '458px' }, flexShrink: 1 }} />
            </Box>

            {/* Spacer to push Balance and Right Section to the right */}
            <Box sx={{ flexGrow: 1, minWidth: '12px' }} />

            {/* ─── Center: Deposit + Balance (Frame 3600) ─── */}
            <Box
                sx={{
                    width: { xs: 'auto', sm: '222.99765014648438px' },
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0,
                    flexShrink: 0,
                }}
            >
                {/* Crypto Balance (Frame 3578: p 10px, gap 14px, bg #36363666, radius 4px 0 0 4px) */}
                <Box
                    sx={{
                        flex: 1,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        p: '10px',
                        gap: '14px',
                        boxSizing: 'border-box',
                        backgroundColor: '#36363666',
                        borderRadius: '4px 0 0 4px',
                        backdropFilter: 'blur(16px)',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        borderRight: 'none',
                        borderImageSource:
                            'linear-gradient(90deg, rgba(255, 13, 183, 0.29) 0%, rgba(255, 13, 183, 0) 57.21%)',
                        borderImageSlice: 1,
                    }}
                >
                    <Image src="/tokens/bitcoin.svg" alt="bitcoin" width={20} height={20} />
                    <AppTypography variant="subtitle3" color="#D9D9D9">
                        0.0021780
                    </AppTypography>
                    <Image src="/icons/navbar/chevron-down.svg" alt="dropdown" width={16} height={16} style={{ opacity: 1 }} />
                </Box>

                {/* Deposit Button (Component 31: width 85px, height 40px, py 11px, px 10px, gap 4px, bg #D61D64, radius 0 4px 4px 0) */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 40,
                        px: '10px',
                        py: '11px',
                        gap: '4px',
                        backgroundColor: '#D61D64',
                        borderRadius: '0 4px 4px 0',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s ease',
                        '&:hover': { opacity: 0.9 },
                    }}
                >
                    <Image src="/icons/navbar/plus.svg" alt="plus" width={16} height={16} />
                    <AppTypography variant="body1Semibold" color="#FFFFFF">
                        Deposit
                    </AppTypography>
                </Box>
            </Box>

            {/* ─── Right Section (Frame 3591: width 417px, gap 24px) ─── */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '12px', md: '18px', lg: '24px' }, flexShrink: 0 }}>
                {/* Events Button (Frame 3590: width 89px, height 40px, p 10px, gap 10px, radius 4px) */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 40,
                        borderRadius: '4px',
                        background:
                            'linear-gradient(0deg, rgba(54, 54, 54, 0.4), rgba(54, 54, 54, 0.4)), linear-gradient(79.11deg, rgba(224, 40, 112, 0.406) 57.05%, rgba(249, 104, 62, 0.595) 106.48%)',
                        backdropFilter: 'blur(16px)',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s ease',
                        '&:hover': { opacity: 0.85 },
                    }}
                >
                    <Image
                        src="/special/event.png"
                        alt="Events"
                        width={89}
                        height={40}
                        priority
                    />
                </Box>

                {/* Action Icons (Frame 4329 + Frame 3589: width 215px, height 40px, gap 8px) */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            cursor: 'pointer',
                            '&:hover': { opacity: 0.7 },
                        }}
                    >
                        <Image src="/icons/navbar/shopping-bag-02.svg" alt="wallet" width={20} height={20} style={{ opacity: 1 }} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            cursor: 'pointer',
                            '&:hover': { opacity: 0.7 },
                        }}
                    >
                        <Image src="/icons/navbar/spin-and-win-02.svg" alt="settings" width={20} height={20} style={{ opacity: 1 }} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            cursor: 'pointer',
                            position: 'relative',
                            '&:hover': { opacity: 0.7 },
                        }}
                    >
                        <Image src="/icons/navbar/bell-01.svg" alt="bell" width={20} height={20} style={{ opacity: 1 }} />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 2,
                                right: 2,
                                width: 27,
                                height: 12,
                                gap: '10px',
                                borderRadius: '10px',
                                px: '4px',
                                backgroundColor: '#D61D64',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxSizing: 'border-box',
                            }}
                        >
                            <AppTypography variant="tiny" color="#FFFFFF">
                                99+
                            </AppTypography>
                        </Box>
                    </Box>
                </Box>

                {/* Language Selector */}
                <Box
                    sx={{
                        minWidth: 87,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        px: '10px',
                        boxSizing: 'border-box',
                        borderRadius: '4px',
                        background: '#36363666',
                        backdropFilter: 'blur(16px)',
                        cursor: 'pointer',
                        '&:hover': { opacity: 0.8 },
                    }}
                >
                    <Image src="/icons/navbar/globe-02.svg" alt="globe" width={20} height={20} style={{ opacity: 1, flexShrink: 0 }} />
                    <AppTypography variant="body1Regular" color="#FFFFFF" sx={{ whiteSpace: 'nowrap' }}>
                        EN
                    </AppTypography>
                    <Image src="/icons/navbar/chevron-down.svg" alt="dropdown" width={16} height={16} style={{ opacity: 1, flexShrink: 0 }} />
                </Box>

                {/* User Avatar */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        '&:hover': { opacity: 0.8 },
                    }}
                >
                    <Box
                        sx={{
                            width: 33,
                            height: 33,
                            border: '1px solid #2D2F33',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        <Image src="/icons/Avatar/user-avatar.png" alt="user avatar" width={33} height={33} />
                    </Box>
                    <Image src="/icons/navbar/chevron-down.svg" alt="dropdown" width={20} height={20} style={{ opacity: 1 }} />
                </Box>
            </Box>
        </Box>
    );
});

AppNavbar.displayName = 'AppNavbar';

export default AppNavbar;
