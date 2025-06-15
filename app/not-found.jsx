'use client';
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black font-manrope px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you are looking for doesn't exist.</p>
      <Link
        href="/"
        className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
      >
        Go back home
      </Link>
    </div>
  );
}
