import React, {useState} from 'react'


function Login() {
  const [users, setUsers] = useState([]);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const [loginUser, setLoginUser] = useState("");

  const login = () => {
    const userFound = users.find((items) => items.userEmail === inputEmail && items.userPwd === inputPwd);

    if (userFound) {
      setLoginUser(userFound.userName);
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="SignIn rounded mt-5 p-5 border border-2 border-primary">
      <h1 className="text-center">Login</h1>
      <center>
        <input
          value={inputEmail}
          className="m-3 d-block"
          type="email"
          placeholder="Email"
          onChange={(e) => setInputEmail(e.target.value)}
        />

        <input
          value={inputPwd}
          className="m-3 d-block"
          type="password"
          placeholder="Password"
          onChange={(e) => setInputPwd(e.target.value)}
        />
        <p>Mr.{loginUser} Login Successful</p>
        <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={login}>Login</button>
      </center>
    </div>
  )
}

export default Login
