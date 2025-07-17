import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Create your account
        </h2>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center border rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
            <FaGoogle className="mr-2" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
            <FaLinkedin className="mr-2 text-blue-600" />
            Continue with LinkedIn
          </button>
          <button className="w-full flex items-center justify-center border rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
            <FaGithub className="mr-2" />
            Continue with GitHub
          </button>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-400">
            Use an organization email to easily collaborate with teammates.
          </p>
        </div>

        {/* Continue Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Continue
        </button>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you acknowledge that you understand and agree to the{" "}
          <a href="#" className="text-gray-400 underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-gray-400 underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
