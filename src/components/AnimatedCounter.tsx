import { useEffect } from 'react';
import { useScrollAnimation, useAnimatedCounter } from '@/hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

const AnimatedCounter = ({ 
  end, 
  suffix = '', 
  duration = 2000, 
  delay = 0,
  className = ''
}: AnimatedCounterProps) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { count, startAnimation } = useAnimatedCounter(end, duration, delay);

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <span 
      ref={elementRef}
      className={`${className} ${isVisible ? 'animate-counter-up' : 'opacity-0'}`}
    >
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;