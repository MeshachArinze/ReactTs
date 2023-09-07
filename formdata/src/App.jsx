import { useEffect, useRef } from "react";

export default function FormWithoutState() {
  // The count will increment by 2 on initial render due to strict mode then by 1 on subsequent renders
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log({ email, password });
    const body = {};
    for (const [key, value] of form.entries()) {
      body[key] = value;
    }
    console.log(body);
    // Do Further input validation and submit the form
  }

  return (
    <div className="form-div">
      <h2>Form Without State</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="email1">Email</label>
          <input id="email1" type="email" name="email" autoComplete="off" />
        </div>
        <div className="input-field">
          <label htmlFor="password1">Password</label>
          <input id="password1" type="password" name="password" />
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