import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PlantSkeleton = () => {
  return (
    <div className="rounded-2xl bg-white shadow-lg p-4 w-full max-w-sm mx-auto">
      {/* Image Placeholder */}
      <Skeleton height={160} className="rounded-xl mb-4" />

      {/* Title */}
      <Skeleton height={20} width="60%" className="mb-2" />

      {/* Subtext */}
      <Skeleton height={14} width="40%" className="mb-4" />

      {/* Tags / Metadata */}
      <div className="flex justify-between gap-2 mb-4">
        <Skeleton height={18} width="45%" />
        <Skeleton height={18} width="45%" />
      </div>

      {/* Button */}
      <Skeleton height={35} className="rounded-md" />
    </div>
  );
};

export default PlantSkeleton;
