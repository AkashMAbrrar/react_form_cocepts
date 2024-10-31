import { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must Be At Least 6 Characters or Longer");
    } else {
      setError("");
    }
    console.log(email);
    console.log(password);
    console.log(name);
  };

  //   event handler for email
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  //   event handler for password

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  //   event handler for Name

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input onChange={handleEmailChange} type="text" name="email" />
        <br />
        <input
          onChange={handlePasswordChange}
          required
          type="password"
          name="password"
        />
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StateFulForm;
