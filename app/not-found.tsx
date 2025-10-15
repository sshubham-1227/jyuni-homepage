"use client";

import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-600/20 mb-4">404</div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-600 mb-2">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <p className="text-sm text-slate-500">
            The page might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {/* Go Back Button */}
          <button
            onClick={() => router.back()}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg"
          >
            <ArrowLeft className="h-5 w-5 text-slate-600" />
            <span className="text-slate-700 font-medium">Go Back</span>
          </button>

          {/* Home Button */}
          <Link
            href="/"
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-900 rounded-lg font-semibold border border-blue-500/50 hover:from-blue-600/30 hover:to-purple-600/30 hover:shadow-lg transition-all duration-200"
          >
            <Home className="h-5 w-5" />
            <span>Go to Home</span>
          </Link>

        </div>

        {/* Help Text */}
        <div className="mt-8 p-4 bg-slate-50/50 rounded-lg border border-slate-200/50">
          <p className="text-sm text-slate-600">
            If you believe this is an error, please{" "}
            <a 
              href="mailto:contact@jyuni.com" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              contact support
            </a>
            {" "}and let us know what happened.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Secure • HIPAA Compliant • Modern ABA Management
          </p>
        </div>
      </div>
    </div>
  );
}