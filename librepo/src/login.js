import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
    // eslint-disable-next-lin
  }, [user, loading, navigate]);
  return (
    <>
      <div className="container-fluid text-center">
        <h1>
            {/* <small className="text-muted">Welcome to </small> */}
            <strong>Welcome to Librepo</strong>
        </h1>
        <p className="lead">This is the toy version 1.0</p>
      </div>
      <div className="login">
      <div className="login__container rounded">
      <span className="text-light h1 text-center mb-4">Login</span>
      <label className="text-light h6">Lib.id</label>
        <input
          type="text"
          className="login__textBox rounded-pill"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
      <label className="text-light h6">Secret Key</label>
        <input
          type="password"
          className="login__textBox rounded-pill"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
      </div>
    </>
  );
}
export default Login;