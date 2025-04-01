"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Simulate checking if the page exists (replace with your actual logic if needed)
    const timer = setTimeout(() => {
      router.push("/"); // Redirect after loading state
    }, 1000); // Simulate a 2-second loading period

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-auto py-3">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-6 w-full rounded-md mb-2"></div>
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-1/2 rounded-md"></div>
        </div>

        {/* About Section Skeleton */}
        <div className="rounded-lg shadow-md mb-8">
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-3/4 rounded-md mb-4"></div>
          <div className="space-y-3">
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-3 w-5/6 rounded-md"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-3 w-4/6 rounded-md"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-3 w-3/6 rounded-md"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-3 w-5/6 rounded-md"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-3 w-2/6 rounded-md"></div>
          </div>
        </div>

        {/* Pinned Publications Section Skeleton */}
        <div className="mb-6 flex justify-between items-center">
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-5 w-1/4 rounded-md"></div>
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-20 rounded-md"></div>
        </div>

        {/* Publication 1 Skeleton */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-5 w-1/2 rounded-md mb-2"></div>
          <div className="flex items-center mb-2">
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-24 rounded-md mr-2"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-16 rounded-md"></div>
          </div>
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-3 w-5/6 rounded-md mb-2"></div>
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-3 w-4/6 rounded-md"></div>
        </div>

        {/* Publication 2 Skeleton */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-5 w-1/3 rounded-md mb-2"></div>
          <div className="flex items-center mb-2">
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-24 rounded-md mr-2"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-16 rounded-md"></div>
          </div>
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-3 w-5/6 rounded-md mb-2"></div>
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-3 w-3/6 rounded-md"></div>
        </div>

        {/* You can add more skeleton structures for other parts of the page */}
      </div>
    </div>
  );
}
