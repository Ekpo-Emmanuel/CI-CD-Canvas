import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 lg:flex-row">
      {/* Left Side: Login Form */}
      <div className="flex flex-col justify-center w-full px-8 lg:w-1/2">
        <div className="max-w-md mx-auto w-full space-y-8">
          <div className="text-center">
            <img
              className="w-12 h-12 mx-auto"
              src="/your-logo-path.svg"
              alt="Logo"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side: Placeholder for image or content */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="flex items-center justify-center w-full h-full bg-blue-100">
          <img
            src="/your-placeholder-image-path.svg"
            alt="Visual Representation"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
