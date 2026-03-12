import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('container mx-auto flex items-center px-4 py-2 max-w-md', className)}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
