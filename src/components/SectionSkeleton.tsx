import { Skeleton } from "@/components/ui/skeleton";

export const SectionSkeleton = () => {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-12 md:py-20">
      {/* Title skeleton */}
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      
      {/* Content skeleton - 3 columns */}
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <div className="h-[85vh] sm:min-h-screen flex items-center justify-center bg-muted">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
        <Skeleton className="h-8 w-1/2 mx-auto mb-8" />
        <Skeleton className="h-12 w-40 mx-auto" />
      </div>
    </div>
  );
};

export const ContactSkeleton = () => {
  return (
    <div className="container max-w-2xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <Skeleton className="h-10 w-48 mx-auto mb-4" />
        <Skeleton className="h-6 w-80 mx-auto" />
      </div>
      
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-12 w-32 mx-auto" />
      </div>
    </div>
  );
};