import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    //clear error message
    setError(null);
    // Set condition for username to be 8 characters minimum
    if (username.length > 7) {
      try {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          }
        );
        const data = await response.json();
        setToken(data.token);
        console.log(data);
      } catch (e) {
        setError(e.message);
        console.log(error);
        setError(null);
      }
    } else if (username.length < 8) {
      //set error message
      setError("username must be eight characters in length.");
    }
    // Clear input values
    setUsername("");
    setPassword("");
  }

  return (
    <>
      <h2>Sign up</h2>
      {error && <p className="error">{error}</p>}
      <form method="POST" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <input className="submit" type="submit" value={"Submit"} />
      </form>
    </>
  );
}
