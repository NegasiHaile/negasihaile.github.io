"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage after a short delay (optional)
    const timeoutId = setTimeout(() => {
      router.push("/");
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timeoutId); // Cleanup the timeout
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="rounded-lg p-8 text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl mb-2">Page Not Found</p>
        <p className=" mb-6">The page you are looking for does not exist.</p>
        <p className="text-gray-500">
          Redirecting to the homepage in a few seconds...
        </p>
      </div>
    </div>
  );
}
