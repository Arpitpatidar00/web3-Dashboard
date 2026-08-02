export interface NavigationItemType {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
  badge?: number;
  hasDropdown?: boolean;
}

export interface NavigationSectionType {
  title: string;
  items: NavigationItemType[];
}

export interface FiatWalletType {
  code: string;
  name: string;
  amount: string;
  amountINR: string;
  flagEmoji?: string;
  flagIcon?: string;
}

export interface CryptoWalletType {
  symbol: string;
  name: string;
  balance: string;
  balanceINR: string;
  holdAmount: string;
  stakedAmount: string;
}

export interface StatusItemType {
  icon: string;
  value: string;
}

export interface ChartDataPoint {
  day: string;
  value: number;
}
