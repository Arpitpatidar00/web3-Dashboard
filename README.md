# Web3 Dashboard

Wallet dashboard UI for a Web3 finance product: total balance, crypto and fiat wallets side by side, and an announcement bar — in a glass-style, responsive layout.

**Stack:** Next.js (App Router) · TypeScript · Material UI (with Emotion SSR cache) · Recharts

**Live:** https://web3-dashboard-two.vercel.app

## Structure

```
src/
  modules/dashboard/   BalanceCard, CryptoWallets, FiatWallets, AnnouncementBar
  components/
    layout/            DashboardLayout, AppNavbar, AppSidebar, AppFooter
    common/            AppGlassCard, AppTypography, AppInput, ActionButton …
  theme/               MUI theme + provider
```

Layout and UI primitives are wrapped once (`App*` components) so screens compose them instead of styling MUI directly.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```
