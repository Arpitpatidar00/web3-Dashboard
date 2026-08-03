import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import AppTypography from '@/components/common/AppTypography';
import NavigationItem from '@/components/layout/AppNavbar/NavigationItem';
import SectionHeader from '@/components/layout/AppSidebar/SectionHeader';
import { NAVIGATION_SECTIONS } from '@/constants';

const AppSidebar: React.FC = React.memo(() => {
    return (
        <Box
            component="nav"
            aria-label="Main navigation"
            sx={{
                width: 254,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 20,
                position: 'relative',
                flexShrink: 0,
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '1px',
                    background:
                        'linear-gradient(180deg, rgba(45,47,51,0.20) 0%, #2D2F33 14%, #2D2F33 87%, rgba(45,47,51,0.20) 100%)',
                },
            }}
        >
            {/* ─── Top Section: Navigation ─── */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                {/* Dashboard — Active */}
                <NavigationItem label="Dashboard" icon="grid" active />

                {/* Navigation Sections */}
                {NAVIGATION_SECTIONS.map((section) => (
                    <Box key={section.title} sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <SectionHeader title={section.title} />
                        {section.items.map((item) => (
                            <NavigationItem
                                key={item.id}
                                label={item.label}
                                icon={item.icon}
                                badge={item.badge}
                                hasDropdown={item.hasDropdown}
                            />
                        ))}
                    </Box>
                ))}
            </Box>

            {/* ─── Bottom Section: Icons + Version ─── */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: 20,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Box
                        sx={{
                            width: 32,
                            height: 32,
                            p: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            background: '#36363666',
                            backdropFilter: 'blur(16px)',
                            boxSizing: 'border-box',
                            cursor: 'pointer',
                            '&:hover': { opacity: 0.8 },
                        }}
                    >
                        <Image src="/icons/sidebar/layout-left.svg" alt="layout" width={20} height={20} style={{ opacity: 1 }} />
                    </Box>
                    <Box
                        sx={{
                            width: 32,
                            height: 32,
                            p: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            background: '#36363666',
                            backdropFilter: 'blur(16px)',
                            boxSizing: 'border-box',
                            cursor: 'pointer',
                            '&:hover': { opacity: 0.8 },
                        }}
                    >
                        <Image src="/icons/sidebar/magic-wand-01.svg" alt="edit" width={20} height={20} style={{ opacity: 1 }} />
                    </Box>
                </Box>
                <AppTypography
                    variant="smallRegular"
                    color="#737373"
                    sx={{
                        fontFamily: '"Barlow Condensed", sans-serif',
                        fontWeight: 700,
                        fontSize: '12px',
                        lineHeight: '100%',
                        letterSpacing: '0.08em',
                        textAlign: 'right',
                    }}
                >
                    v0.1.23
                </AppTypography>
            </Box>
        </Box>
    );
});

AppSidebar.displayName = 'AppSidebar';

export default AppSidebar;
