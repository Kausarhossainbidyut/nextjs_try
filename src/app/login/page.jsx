"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Login with Google
      </button>
    </div>
  );
}
