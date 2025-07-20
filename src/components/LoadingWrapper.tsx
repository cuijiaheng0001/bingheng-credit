import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface LoadingWrapperProps {
  isLoading: boolean;
  skeleton?: React.ReactNode;
  children: React.ReactNode;
}

export const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ 
  isLoading, 
  skeleton,
  children 
}) => {
  if (isLoading) {
    return skeleton || (
      <div className="space-y-4 p-6">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    );
  }
  
  return <>{children}</>;
};