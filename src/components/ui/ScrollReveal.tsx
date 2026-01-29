import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    };

    const transforms: Record<string, { initial: string; final: string }> = {
      'fade-up': { initial: 'translateY(40px)', final: 'translateY(0)' },
      'fade-left': { initial: 'translateX(-40px)', final: 'translateX(0)' },
      'fade-right': { initial: 'translateX(40px)', final: 'translateX(0)' },
      scale: { initial: 'scale(0.9)', final: 'scale(1)' },
      fade: { initial: 'none', final: 'none' },
    };

    const transform = transforms[animation];
    return {
      ...baseStyles,
      transform: isVisible ? transform.final : transform.initial,
    };
  };

  return (
    <div ref={ref} className={cn(className)} style={getAnimationStyles()}>
      {children}
    </div>
  );
};

export default ScrollReveal;
