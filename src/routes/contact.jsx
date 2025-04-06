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
  const [successMessage, setSuccessMessage] = useState(""); // <-- Add this line

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://architect-ip-studios-backend.onrender.com/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      setSuccessMessage(response.data.message); // "Registered Successfully"
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.response?.data); // Debugging
      setSuccessMessage(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="bg-sky-200 w-full flex justify-center h-screen">
      <div className="bg-white w-[400px] mt-12 h-[500px] rounded-md p-4">
        <p className="text-black text-center text-2xl">Sign Up</p>
        {successMessage && (
          <p className="text-center text-green-700 mt-2">{successMessage}</p>
        )}
        <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
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
          <p>
            Already have an account{"    "}
            <Link className="text-blue-700 hover:text-blue-900" to="/login">
              Login
            </Link>
          </p>

          <button
            type="submit"
            className="bg-black text-white font-semibold p-2 rounded-md mt-3 hover:bg-red-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
