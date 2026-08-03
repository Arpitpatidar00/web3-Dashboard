import {
  NavigationSectionType,
  FiatWalletType,
  CryptoWalletType,
  ChartDataPoint,
} from "@/types";

export const NAVIGATION_SECTIONS: NavigationSectionType[] = [
  {
    title: "EARNINGS",
    items: [
      { id: "shortlinks", label: "Shortlinks", icon: "link", badge: 5 },
      { id: "faucet", label: "Faucet", icon: "faucet" },
      { id: "ptc-ads", label: "PTC ADs", icon: "monitor", hasDropdown: true },
    ],
  },
  {
    title: "ORBIT SPACE",
    items: [
      { id: "discover", label: "Discover", icon: "compass" },
      { id: "crates", label: "Crates", icon: "grid4" },
      { id: "shop", label: "Shop", icon: "shoppingBag", hasDropdown: true },
    ],
  },
];

export const FIAT_WALLETS: FiatWalletType[] = [
  {
    code: "AUD",
    name: "Australian Dollar",
    amount: "5400 AUD",
    amountINR: "3,51,953.48 INR",
    flagEmoji: "🇦🇺",
    flagIcon: "/country/australia-flag.svg",
  },
  {
    code: "IDR",
    name: "Indonesian Rupiah",
    amount: "5400 IDR",
    amountINR: "3,51,953.48 INR",
    flagEmoji: "🇮🇩",
    flagIcon: "/country/indonesia-flag.svg",
  },
  {
    code: "JPY",
    name: "Japanese Yen",
    amount: "5400 JPY",
    amountINR: "3,51,953.48 INR",
    flagEmoji: "🇯🇵",
    flagIcon: "/country/japan-flag.svg",
  },
];

export const CRYPTO_WALLETS: CryptoWalletType[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    balance: "0.84864327 BTC",
    balanceINR: "3,553.48 INR",
    holdAmount: "0.20000000 BTC",
    stakedAmount: "0.10000000 BTC",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "4.25194000 ETH",
    balanceINR: "12,450.00 INR",
    holdAmount: "1.50000000 ETH",
    stakedAmount: "2.00000000 ETH",
  },
  {
    symbol: "SOL",
    name: "Solana",
    balance: "45.12000000 SOL",
    balanceINR: "6,210.50 INR",
    holdAmount: "10.00000000 SOL",
    stakedAmount: "5.00000000 SOL",
  },
  {
    symbol: "USDT",
    name: "Tether USD",
    balance: "1,200.000000 USDT",
    balanceINR: "1,00,800.00 INR",
    holdAmount: "500.000000 USDT",
    stakedAmount: "200.000000 USDT",
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    balance: "12,500.000000 DOGE",
    balanceINR: "1,850.20 INR",
    holdAmount: "5,000.000000 DOGE",
    stakedAmount: "1,000.000000 DOGE",
  },
];

export const CHART_DATA: ChartDataPoint[] = [
  { day: "M", value: 0.8 },
  { day: "M-1", value: 9.0 },
  { day: "M-2", value: 8.1 },
  { day: "Tu", value: 21.1 },
  { day: "Tu-1", value: 31.1 },
  { day: "Tu-2", value: 27.2 },
  { day: "W", value: 37.1 },
  { day: "W-1", value: 35.3 },
  { day: "W-2", value: 26.7 },
  { day: "Th", value: 38.8 },
  { day: "Th-1", value: 54.0 },
  { day: "Th-2", value: 36.7 },
  { day: "F", value: 46.5 },
  { day: "F-1", value: 46.0 },
  { day: "F-2", value: 50.6 },
  { day: "Sa", value: 67.4 },
  { day: "Sa-1", value: 68.1 },
  { day: "Sa-2", value: 89.3 },
  { day: "Su", value: 91.9 },
  { day: "Su-1", value: 99.3 },
  { day: "Su-2", value: 90.8 },
];

export const TIME_FILTERS = ["7D", "30D", "90D", "180D"];

export const BOTTOM_STATUS_ITEMS = [
  { icon: "signal", value: "1.7%" },
  { icon: "calendar", value: "156" },
  { icon: "timer", value: "6:17" },
  { icon: "heart", value: "98" },
];
