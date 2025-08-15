import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Hook that scrolls to top when navigating to specific routes
 * @param targetRoutes - Array of routes that should trigger scroll to top
 */
export function useScrollToTop(targetRoutes: string[] = ['/contact']) {
  const [location] = useLocation();

  useEffect(() => {
    // Check if current route is in the target routes
    if (targetRoutes.includes(location)) {
      // Scroll to top instantly without smooth scrolling to avoid janky behavior
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [location, targetRoutes]);
}

/**
 * Hook specifically for Contact page scroll-to-top behavior
 */
export function useContactScrollToTop() {
  return useScrollToTop(['/contact']);
}