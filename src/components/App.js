import React from "react";

const App = () => {
  return (
    <div className="container">
      <form>
        <label>Name</label>
        <input type="text" id="name" />
        <br />
        <label>Email</label>
        <input type="text" id="email" />
        <br />
        <label>Password</label>
        <input type="password" id="password" />
        <br />
        <label>Consent</label>
        <input type="checkbox" />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default App;
