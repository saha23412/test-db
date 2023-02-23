import Home from '../pages/home/home';
import Wallet from '../pages/wallet/wallet';

export const MAIN_ROUTE = '/';
export const WALLET_ROUTE = '/wallet';

export const publickRoutes = [
  { path: MAIN_ROUTE, element: Home },
  { path: WALLET_ROUTE, element: Wallet },
];
