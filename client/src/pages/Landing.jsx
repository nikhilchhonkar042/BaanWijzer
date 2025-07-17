import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center text-center px-4">
      {/* Logo or Title */}
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
        Welcome to <span className="text-blue-600">BaanWijzer</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Your personalized AI career coach. Discover your strengths, bridge skill gaps, and land your dream job with smart guidance.
      </p>

      {/* CTA Button */}
      <Link
        to="/login"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
      >
        Get Started
      </Link>

      {/* Background Illustration or Footer Note */}
      <p className="text-sm text-gray-400 mt-12">
        Built with 💡 by Shruti & Nikhil
      </p>
    </div>
  );
}
