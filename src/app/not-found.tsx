"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking if the page exists (replace with your actual logic if needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.push("/"); // Redirect after loading state
    }, 1000); // Simulate a 2-second loading period

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {isLoading && (
        <div className="flex flex-col items-center rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold animate-pulse mb-4">Loading...</h1>
          <div className="w-16 h-16 rounded-full border-t-4 border-blue-500 border-solid animate-spin"></div>
        </div>
      )}
    </div>
  );
}
