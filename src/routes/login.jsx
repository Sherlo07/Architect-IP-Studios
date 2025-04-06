import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://architect-ip-studios-backend.onrender.com/auth/login",
        {
          email,
          password,
        }
      );

      setMessage(response.data.message);
      navigate({ to: "/" }); // 👈 redirect on successful login
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-sky-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        {message && <p className="mt-3 text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
}
