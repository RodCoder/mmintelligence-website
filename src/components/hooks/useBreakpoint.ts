import { useMediaQuery } from './useMediaQuery';

export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  return { isMobile, isTablet, isDesktop: !isMobile && !isTablet };
}
