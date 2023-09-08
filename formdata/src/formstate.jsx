import { useEffect, useRef, useState } from "react";

export default function FormWithState() {
  // The count will increment by 2 on initial render due to strict mode then by 1 on subsequent renders
  const countRef = useRef(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <div className="form-div">
      <h2>Form With State</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="email2">Email</label>
          <input
            id="email2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password2">Password</label>
          <input
            id="password2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <div>
          <p>
            The Component Re-Rendered <span>{countRef.current}</span> times
          </p>
        </div>
      </form>
    </div>
  );
}
