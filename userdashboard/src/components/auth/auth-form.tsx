/* eslint-disable @next/next/no-async-client-component */
import { useState, useRef, FormEventHandler } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import "./auth-form.css";

async function CreateUser(email: string, password: string) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok && response.status === 200) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
}

export default function AuthForm() {
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevstate: boolean) => !prevstate);
  }

  async function submitHandler(event: FormEventHandler) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if (!result.error) {
        router.replace("/profile");
      }
    } else {
      try {
        const result = await CreateUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className="auth">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className="control">
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className="actions">
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className="toggle"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}
