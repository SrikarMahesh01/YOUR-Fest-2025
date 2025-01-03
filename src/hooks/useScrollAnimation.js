import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, isVisible };
}; 