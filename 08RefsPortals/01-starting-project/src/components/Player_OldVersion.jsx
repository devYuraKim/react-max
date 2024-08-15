import { useState } from "react";

export default function Player_OldVersion() {
  const [name, setName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setSubmitted(false);
    setName(e.target.value.trim());
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? name : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={name} />
        <button onClick={() => setSubmitted(true)}>Set Name</button>
      </p>
    </section>
  );
}
