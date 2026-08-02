import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import AppTypography from '@/components/common/AppTypography';

const AppFooter: React.FC = React.memo(() => {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: 44,
                pt: '8px',
                pr: '20px',
                pb: '8px',
                pl: '20px',
                gap: '10px',
                backgroundColor: '#22222399',
                borderTop: '1px solid #FFFFFF14',
                position: 'relative',
                zIndex: 10,
            }}
        >
            {/* ─── Left: Status Items ─── */}
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, gap: 20 }}>
                {/* Signal */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Image src="/icons/footer/droplets-01.svg" alt="signal" width={20} height={20} />
                    <AppTypography variant="captionRegular" color="rgba(217, 217, 217, 0.70)">
                        1.7%
                    </AppTypography>
                </Box>

                {/* Divider */}
                <Box
                    sx={{
                        width: '1px',
                        height: 18,
                        background:
                            'linear-gradient(180deg, rgba(121,127,138,0.20) 0%, rgba(121,127,138,1) 15.38%, rgba(121,127,138,1) 86.54%, rgba(121,127,138,0.20) 100%)',
                    }}
                />

                {/* Calendar / CPU */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Image src="/icons/footer/cpu-chip-01.svg" alt="cpu" width={20} height={20} style={{ opacity: 0.70 }} />
                    <AppTypography variant="captionRegular" color="rgba(217, 217, 217, 0.70)">
                        156
                    </AppTypography>
                </Box>

                {/* Divider */}
                <Box
                    sx={{
                        width: '1px',
                        height: 18,
                        background:
                            'linear-gradient(180deg, rgba(121,127,138,0.20) 0%, rgba(121,127,138,1) 15.38%, rgba(121,127,138,1) 86.54%, rgba(121,127,138,0.20) 100%)',
                    }}
                />

                {/* Badge / Chevrons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Image src="/icons/footer/chevrons-up-badge.svg" alt="timer" width={20} height={20} style={{ opacity: 0.70 }} />
                    <AppTypography variant="captionRegular" color="rgba(217, 217, 217, 0.70)">
                        6:17
                    </AppTypography>
                </Box>

                {/* Divider */}
                <Box
                    sx={{
                        width: '1px',
                        height: 18,
                        background:
                            'linear-gradient(180deg, rgba(121,127,138,0.20) 0%, rgba(121,127,138,1) 15.38%, rgba(121,127,138,1) 86.54%, rgba(121,127,138,0.20) 100%)',
                    }}
                />

                {/* Shopping bag / Favorite */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Image src="/icons/footer/shopping-bag-01.svg" alt="shopping bag" width={20} height={20} style={{ opacity: 0.70 }} />
                    <AppTypography variant="captionRegular" color="rgba(217, 217, 217, 0.70)">
                        98
                    </AppTypography>
                </Box>

                {/* Divider */}
                <Box
                    sx={{
                        width: '1px',
                        height: 18,
                        background:
                            'linear-gradient(180deg, rgba(121,127,138,0.20) 0%, rgba(121,127,138,1) 15.38%, rgba(121,127,138,1) 86.54%, rgba(121,127,138,0.20) 100%)',
                    }}
                />

                {/* Prize Notification */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <AppTypography component="span" variant="captionRegular" sx={{ fontSize: '15px', lineHeight: 1 }}>
                        🎉
                    </AppTypography>
                    <AppTypography variant="captionBold" color="#4ADE80">
                        You Won!
                    </AppTypography>
                    <AppTypography variant="captionRegular" color="rgba(217, 217, 217, 0.70)">
                        - 1200 DOGE
                    </AppTypography>

                </Box>

                {/* Divider */}
                <Box
                    sx={{
                        width: '1px',
                        height: 18,
                        background:
                            'linear-gradient(180deg, rgba(121,127,138,0.20) 0%, rgba(121,127,138,1) 15.38%, rgba(121,127,138,1) 86.54%, rgba(121,127,138,0.20) 100%)',
                    }}
                />

                {/* Shield icon */}
                <Box
                    sx={{
                        width: 28,
                        height: 28,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                    }}
                >
                    <Image src="/icons/footer/shield-02.svg" alt="shield" width={20} height={20} style={{ opacity: 0.70 }} />
                </Box>
            </Box>

            {/* ─── Right: Action Icons ─── */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Box sx={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4, cursor: 'pointer', '&:hover': { opacity: 0.9 } }}>
                    <Image src="/icons/footer/bar-chart-05.svg" alt="chart" width={20} height={20} style={{ opacity: 0.70 }} />
                </Box>
                <Box sx={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4, cursor: 'pointer', '&:hover': { opacity: 0.9 } }}>
                    <Image src="/icons/footer/headphones-01.svg" alt="headphones" width={20} height={20} style={{ opacity: 0.70 }} />
                </Box>
                <Box sx={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4, cursor: 'pointer', '&:hover': { opacity: 0.9 } }}>
                    <Image src="/icons/footer/book-closed.svg" alt="book" width={20} height={20} style={{ opacity: 0.70 }} />
                </Box>
                <Box sx={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4, cursor: 'pointer', '&:hover': { opacity: 0.9 } }}>
                    <Image src="/icons/footer/dots-vertical.svg" alt="more" width={20} height={20} style={{ opacity: 0.70 }} />
                </Box>
            </Box>
        </Box>
    );
});

AppFooter.displayName = 'AppFooter';

export default AppFooter;
