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
      <div className="container-fluid text-center text-light bg-black p-2">
        <h1>
            {/* <small className="text-muted">Welcome to </small> */}
            Lib.Vault
        </h1>
      </div>
      <div className="login p-5">
      <div className="login__container rounded">
      <span className="text-light h1 text-center mb-4">Login</span>
      <label className="text-light h5">Lib.id</label>
        <input
          type="text"
          className="login__textBox rounded-pill"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
      <label className="text-light h5">Secret key</label>
        <input
          type="password"
          className="login__textBox rounded-pill"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passkey"
        />
        <button
          className="btn btn-violet rounded-pill mt-3"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Enter Lib.vault
        </button>
        <button className="btn btn-light rounded-pill mt-3 mb-3" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div className="text-light">
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
        <div className="text-light text-center">
          <Link to="/reset">Forgot Password</Link>
        </div>
      </div>
      </div>
      <div class="jumbotron fixed-bottom navbar-dark bg-black p-2">
           <div className="text-center text-light">
            <a className="text-light" href="/">Gateway to Librepo</a>
            </div>
    </div>
    </>
  );
}
export default Login;