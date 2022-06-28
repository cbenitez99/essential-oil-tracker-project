import React, {useState} from 'react'

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
      e.preventDefault();
      try {
      let res = await fetch("/users", {
          method: "POST",
          body: JSON.stringify({
          name: name,
          password: password
          }),
      });
      let resJson = await res.json();
      if (res.ok) {
        setUser(resJson)
          setName("");
          setPassword("");
          setMessage("User created successfully");
      } else {
          setMessage("Some error occured");
      }
      } catch (err) {
      console.log(err);
      }
  };

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              />
              <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit">Signup</button>

              <div>{message ? <p>{message}</p> : null}</div>
          </form>
      </div>
  );
}

export default Signup;