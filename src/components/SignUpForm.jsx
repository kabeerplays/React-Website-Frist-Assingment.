import React, { useState } from 'react';

const SignUpForm = () => {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    const person = { userName, userEmail, userPwd };

    const userFound = users.find((items) => userEmail === items.userEmail);

    if (!userFound) {
      setUsers([...users, person]);
      alert("User Registered Successfully");
    } else {
      alert("User already exists");
    }
  };

  return (
    <div className="SignUp rounded mt-5 p-5 border border-2 border-danger">
      <h1 className="text-center">SignUp</h1>
      <form onSubmit={signUp}>
        <center>
          <input
            value={userName}
            className="m-3 d-block"
            type="text"
            placeholder="Name"
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            value={userEmail}
            className="m-3 d-block"
            type="email"
            placeholder="Email"
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <input
            value={userPwd}
            className="m-3 d-block"
            type="password"
            placeholder="Password"
            onChange={(e) => setUserPwd(e.target.value)}
          />

          <input
            type="submit"
            value="Sign up"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
        </center>
      </form>
    </div>
  );
};
export default SignUpForm;