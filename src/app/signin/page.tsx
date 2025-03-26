"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [emailForReset, setEmailForReset] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    alert(`${isSignUp ? "Signed Up" : "Signed In"} Successfully!`);
    router.push("/dashboard");
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link would be sent to: " + emailForReset);
    setShowForgotPassword(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {!showForgotPassword ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">
              {isSignUp ? "Create an Account" : "Welcome Back"}
            </h2>
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
            <p className="mt-4 text-center text-sm">
              {isSignUp ? "Already have an account?" : "New here?"} {" "}
              <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500">
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
            {!isSignUp && (
              <p className="mt-2 text-center text-sm">
                <button onClick={() => setShowForgotPassword(true)} className="text-red-500">
                  Forgot Password?
                </button>
              </p>
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
            <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={emailForReset}
                  onChange={(e) => setEmailForReset(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                Send Reset Link
              </button>
            </form>
            <p className="mt-4 text-center text-sm">
              <button onClick={() => setShowForgotPassword(false)} className="text-blue-500">
                Back to Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}