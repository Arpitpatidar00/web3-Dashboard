import { NavigationSectionType, FiatWalletType, CryptoWalletType, ChartDataPoint } from '@/types';

export const NAVIGATION_SECTIONS: NavigationSectionType[] = [
  {
    title: 'EARNINGS',
    items: [
      { id: 'shortlinks', label: 'Shortlinks', icon: 'link', badge: 5 },
      { id: 'faucet', label: 'Faucet', icon: 'faucet' },
      { id: 'ptc-ads', label: 'PTC ADs', icon: 'monitor', hasDropdown: true },
    ],
  },
  {
    title: 'ORBIT SPACE',
    items: [
      { id: 'discover', label: 'Discover', icon: 'compass' },
      { id: 'crates', label: 'Crates', icon: 'grid4' },
      { id: 'shop', label: 'Shop', icon: 'shoppingBag', hasDropdown: true },
    ],
  },
];

export const FIAT_WALLETS: FiatWalletType[] = [
  {
    code: 'AUD',
    name: 'Australian Dollar',
    amount: '5400 AUD',
    amountINR: '3,51,953.48 INR',
    flagEmoji: '🇦🇺',
    flagIcon: '/country/australia-flag.svg',
  },
  {
    code: 'IDR',
    name: 'Indonesian Rupiah',
    amount: '5400 IDR',
    amountINR: '3,51,953.48 INR',
    flagEmoji: '🇮🇩',
    flagIcon: '/country/indonesia-flag.svg',
  },
  {
    code: 'JPY',
    name: 'Japanese Yen',
    amount: '5400 JPY',
    amountINR: '3,51,953.48 INR',
    flagEmoji: '🇯🇵',
    flagIcon: '/country/japan-flag.svg',
  },
];

export const CRYPTO_WALLETS: CryptoWalletType[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    balance: '0.84864327 BTC',
    balanceINR: '3,553.48 INR',
    holdAmount: '•••••••',
    stakedAmount: '•••••••',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    balance: '4.25194000 ETH',
    balanceINR: '12,450.00 INR',
    holdAmount: '•••••••',
    stakedAmount: '•••••••',
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    balance: '45.12000000 SOL',
    balanceINR: '6,210.50 INR',
    holdAmount: '•••••••',
    stakedAmount: '•••••••',
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    balance: '1,200.000000 USDT',
    balanceINR: '1,00,800.00 INR',
    holdAmount: '•••••••',
    stakedAmount: '•••••••',
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    balance: '12,500.000000 DOGE',
    balanceINR: '1,850.20 INR',
    holdAmount: '•••••••',
    stakedAmount: '•••••••',
  },
];

export const CHART_DATA: ChartDataPoint[] = [
  { day: 'M', value: 1000 },
  { day: 'T', value: 1250 },
  { day: 'W', value: 1150 },
  { day: 'T', value: 2586 },
  { day: 'F', value: 2200 },
  { day: 'S', value: 2800 },
  { day: 'S', value: 3100 },
];

export const TIME_FILTERS = ['7D', '30D', '90D', '180D'];

export const BOTTOM_STATUS_ITEMS = [
  { icon: 'signal', value: '1.7%' },
  { icon: 'calendar', value: '156' },
  { icon: 'timer', value: '6:17' },
  { icon: 'heart', value: '98' },
];
