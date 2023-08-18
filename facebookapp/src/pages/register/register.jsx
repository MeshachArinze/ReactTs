import { useState } from "react";

export default function Register() {
  const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
      
    };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleSubmit} className="loginBox">
            <input
              placeholder="Username"
              name="username"
              className="loginInput"
              value={inputs.username || ""}
              onChange={handleChange}
            />
            <input
              placeholder="Email"
              name="useremail"
              className="loginInput"
              value={inputs.useremail || ""}
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              name="userpassword"
              className="loginInput"
              value={inputs.userpassword || ""}
              onChange={handleChange}
            />
            <input
              placeholder="Password Again"
              name="confirm"
              className="loginInput"
              value={inputs.confirm || ""}
              onChange={handleChange}
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
