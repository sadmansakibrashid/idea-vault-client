"use client";

import Link from "next/link";
import { RefreshCcw, AlertCircle } from "lucide-react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-orange-100 px-6">
      <div className="max-w-lg w-full text-center bg-white shadow-2xl rounded-3xl p-10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-5 rounded-full">
            <AlertCircle className="w-14 h-14 text-red-600" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-extrabold text-red-600">
          Oops!
        </h1>

        {/* Heading */}
        <h2 className="mt-3 text-3xl font-bold text-gray-800">
          Something Went Wrong
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          An unexpected error occurred while loading this page.
          Please try again or return to the homepage.
        </p>

        {/* Optional Error Message (Development) */}
        {process.env.NODE_ENV === "development" && error?.message && (
          <div className="mt-6 rounded-lg bg-red-50 border border-red-200 p-3 text-left">
            <p className="text-sm text-red-700 font-mono">
              {error.message}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>

          <Link href="/">
            <button className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;