import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

function RouteComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("Form submitted successfully!");
    setErrorMessage("");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className=" h-auto w-[500px] p-6 rounded-lg shadow-lg bg-white">
        <div className="flex justify-center mt-3">
          <p className="text-3xl max-lg:text-2xl text-red-700 font-semibold">
            Sign Up
          </p>
        </div>
        <div className="mt-6">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col text-lg font-medium">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="border border-gray-400 p-2 mt-1 rounded-md"
              />
            </label>

            <label className="flex flex-col text-lg font-medium">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="border border-gray-400 p-2 mt-1 rounded-md"
              />
            </label>

            <label className="flex flex-col text-lg font-medium">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
                className="border border-gray-400 p-2 mt-1 rounded-md"
              />
            </label>

            <label className="flex flex-col text-lg font-medium">
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                className="border border-gray-400 p-2 mt-1 rounded-md"
              />
            </label>

            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-600">{successMessage}</p>
            )}

            <button
              type="submit"
              className="bg-black text-white font-semibold p-2 rounded-md mt-3 hover:bg-red-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ✅ Correct export for @tanstack/react-router
export const Route = createFileRoute("/contact")({ component: RouteComponent });
