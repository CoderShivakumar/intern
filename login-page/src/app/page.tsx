"use client";
import { useState, useEffect } from "react";
// Define types for form props
interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

// Reusable FormField component
function FormField({ label, id, type, placeholder }: FormFieldProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        placeholder={placeholder}
      />
    </div>
  );
}

// Reusable PhoneInput component
function PhoneInput() {
  return (
    <div className="space-y-1">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <div className="flex mt-1">
        <select
          id="country-code"
          name="country-code"
          className="rounded-l-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="+1">+1 (US)</option>
          <option value="+91">+91 (IN)</option>
          <option value="+44">+44 (UK)</option>
        </select>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="flex-1 rounded-r-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
}

// Forgot Password Form component
function ForgotPasswordForm({ onBack }: { onBack: () => void }) {
  return (
    <section aria-labelledby="forgot-password-heading">
      <h2
        id="forgot-password-heading"
        className="mb-6 text-center text-2xl font-bold text-gray-800"
      >
        Forgot Password
      </h2>
      <form method="post" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <FormField
          label="Email ID or Username"
          id="forgot-credential"
          type="text"
          placeholder="Enter your email or username"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 p-2 text-white transition hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Back to{" "}
        <button
          type="button"
          onClick={onBack}
          className="text-cyan-500 hover:underline focus:outline-none"
        >
          Sign In
        </button>
      </p>
    </section>
  );
}

// Galaxy Background component
function GalaxyBackground() {
  return (
    <div className="absolute inset-0 bg-black overflow-hidden animate-galaxy">
      <div className="absolute w-2 h-2 bg-white rounded-full top-10 left-20 animate-twinkle" />
      <div className="absolute w-1 h-1 bg-white rounded-full top-40 right-32 animate-twinkle" />
      <div className="absolute w-3 h-3 bg-white rounded-full bottom-20 left-40 animate-twinkle" />
      <div className="absolute w-1/2 h-1/2 bg-gradient-to-br from-purple-800 to-blue-600 opacity-50 rounded-full top-1/4 left-1/4 blur-xl" />
    </div>
  );
}

// Space Items component with rocket
function SpaceItems() {
  return (
    <>
      <div className="absolute w-8 h-16 bg-gradient-to-r from-gray-300 to-gray-500 rounded-r-full top-1/3 animate-rocket-fast">
        <div className="absolute w-6 h-4 bg-gradient-to-l from-orange-500 to-red-600 rounded-l-full left-0 top-1/2 transform -translate-y-1/2 animate-fire" />
      </div>
      <div className="absolute w-2 h-2 bg-white rounded-full top-10 left-20 animate-float" />
      <div className="absolute w-1 h-1 bg-cyan-300 rounded-full top-40 right-32 animate-float-slow" />
      <div className="absolute w-3 h-3 bg-yellow-200 rounded-full bottom-20 left-40 animate-float" />
      <div className="absolute w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-800 rounded-full top-1/4 right-1/4 animate-float-slow shadow-lg" />
      <div className="absolute w-8 h-8 bg-gray-400 rounded-[40%_60%_50%_50%] bottom-1/3 left-1/4 animate-float rotate-12 shadow-md" />
    </>
  );
}

export default function SignInPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showGalaxy, setShowGalaxy] = useState(true);

  const toggleForm = () => setIsSignIn((prev) => !prev);
  const toggleForgotPassword = () => setShowForgotPassword((prev) => !prev);

  // Handle form submission
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default GET behavior
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log("Sign In:", { username, password }); // Replace with your logic
  };

  // Switch from galaxy to space background after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGalaxy(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {showGalaxy && <GalaxyBackground />}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-[#2A0A4A] via-blue-900 to-cyan-500 ${
          showGalaxy ? "opacity-0" : "opacity-100 animate-tv-shutdown"
        }`}
      >
        <SpaceItems />
        <div className="relative z-10 w-full max-w-md rounded-lg bg-gradient-to-br from-gray-200 to-blue-100 p-8 shadow-md">
          {showForgotPassword ? (
            <ForgotPasswordForm onBack={toggleForgotPassword} />
          ) : isSignIn ? (
            <section aria-labelledby="sign-in-heading">
              <h2 id="sign-in-heading" className="mb-6 text-center text-2xl font-bold text-gray-800">
                Sign In
              </h2>
              <form method="post" className="space-y-4" onSubmit={handleSignIn}>
                <FormField
                  label="Username"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                />
                <FormField
                  label="Password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <div className="text-right">
                  <button
                    type="button"
                    onClick={toggleForgotPassword}
                    className="text-sm text-cyan-500 hover:underline focus:outline-none"
                  >
                    Forgot Password?
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 p-2 text-white transition hover:bg-blue-700"
                >
                  Sign In
                </button>
              </form>
              <p className="mt-4 text-center text-sm text-gray-600">
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-cyan-500 hover:underline focus:outline-none"
                >
                  Create an Account
                </button>
              </p>
            </section>
          ) : (
            <section aria-labelledby="create-account-heading">
              <h2
                id="create-account-heading"
                className="mb-6 text-center text-2xl font-bold text-gray-800"
              >
                Create an Account
              </h2>
              <form method="post" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <FormField
                  label="Username"
                  id="new-username"
                  type="text"
                  placeholder="Choose a username"
                />
                <PhoneInput />
                <FormField label="Date of Birth" id="dob" type="date" placeholder="" />
                <FormField
                  label="Password"
                  id="new-password"
                  type="password"
                  placeholder="Create a password"
                />
                <FormField
                  label="Confirm Password"
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 p-2 text-white transition hover:bg-blue-700"
                >
                  Create Account
                </button>
              </form>
              <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-cyan-500 hover:underline focus:outline-none"
                >
                  Sign In
                </button>
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}