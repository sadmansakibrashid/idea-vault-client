import Link from "next/link";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-pink-100 px-6">
      <div className="text-center max-w-lg">
       
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 p-5 rounded-full shadow-lg">
            <AlertTriangle className="w-14 h-14 text-purple-600" />
          </div>
        </div>

        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

     <p className="mt-3 text-gray-600">
          The page you are looking for does not exist or has been moved.
          Try returning to the homepage.
        </p>

        <Link href="/">
          <button className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
             Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;