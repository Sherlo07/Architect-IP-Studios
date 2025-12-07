import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import axios from "axios";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Prefer environment-configured backend base URL, fallback to known URL
  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://architect-ip-studios-backend.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    // basic client-side validation
    if (!name || !email || !password) {
      setErrorMessage("Please complete all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        name,
        email,
        password,
      });

      setSuccessMessage(response.data?.message || "Registered successfully.");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err?.response || err);
      setErrorMessage(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Redirect to backend OAuth route (ensure your backend exposes /auth/google)
  const handleGoogleSignIn = () => {
    window.location.href = `${BASE_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-sky-50 p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Brand / Illustration */}
        <div className="p-8 bg-gradient-to-b from-[#0ea5a4] to-[#0369a1] text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Join Architect IP Studios</h2>
          <p className="opacity-90 mb-6">
            Create your account to access project resources and collaborate with
            our community.
          </p>
          <ul className="text-sm opacity-90 space-y-2">
            <li>• Professional portfolio hosting</li>
            <li>• Exclusive design resources</li>
            <li>• Community collaboration</li>
          </ul>
          <div className="mt-6 hidden md:block">
            <img
              src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
              alt="Architecture sample"
              className="rounded-lg shadow-lg w-full h-44 object-cover"
            />
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-1">Create an account</h3>
          <p className="text-sm text-gray-500 mb-6">
            Sign up to manage your projects and get featured.
          </p>

          {successMessage && (
            <div className="mb-4 p-3 rounded text-green-800 bg-green-100">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 p-3 rounded text-red-800 bg-red-100">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                Full name
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-sky-400 focus:border-transparent p-2"
                aria-label="Full name"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                Email address
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-sky-400 focus:border-transparent p-2"
                aria-label="Email address"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Create a strong password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-sky-400 focus:border-transparent p-2"
                aria-label="Password"
              />
            </label>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-sky-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 rounded-md transition disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-md py-2 hover:shadow-sm transition bg-white"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google logo"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">
                  Continue with Google
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RouteComponent;
