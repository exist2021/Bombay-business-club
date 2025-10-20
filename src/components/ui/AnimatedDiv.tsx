"use client";

import { useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedDivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function AnimatedDiv({ children, className, ...props }: AnimatedDivProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={cn(
        "transition-opacity duration-700 ease-in-out",
        isMounted ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
