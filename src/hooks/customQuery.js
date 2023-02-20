import { useMediaQuery } from "./mediaQuery";
export const useIsSmall = () => useMediaQuery('(min-width: 390px)');
export const useIsMedium = () => useMediaQuery('(min-width: 768px)');