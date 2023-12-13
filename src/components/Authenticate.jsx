import { useState } from "react";

export default function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState();
  const [username, setUsername] = useState("");
  async function handleClick() {
    try {
      console.log(token);
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();

      console.log(result);
      setSuccessMessage(result.message);
      setUsername(result.data.username);
    } catch (e) {
      setError(e.message);
    }
  }
  return (
    <>
      <h2>Authenticate</h2>

      {successMessage && (
        <p>
          <span>{username} </span>
          {successMessage}
        </p>
      )}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}
