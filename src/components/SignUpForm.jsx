import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("handle submit");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        Username:
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value={"submit"} />
    </form>
  );
}
