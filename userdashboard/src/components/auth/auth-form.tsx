/* eslint-disable @next/next/no-async-client-component */
import { useState, useRef } from "react"
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

async function CreateUser(email: string, password: string) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
}

export default function AuthForm() {
  const router = useRouter();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevstate) => !prevstate)
  }

  function submitHandler(event: HTMLFormElement) {
    event.preventDefault();
    
  }
}
