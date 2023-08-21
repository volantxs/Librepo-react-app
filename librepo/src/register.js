import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "./register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <>
    <div className="container-fluid text-center p-2">
      <small className="text-muted">Welcome to </small>

        <h1>
            Lib.Vault
        </h1>
      </div>
    <div className="register p-5">
      <div className="register__container rounded">
        <span className="text-light text-center h1 mb-4">New Reader</span>
        <label className="text-light h5">Reader</label>
        <input
          type="text"
          className="register__textBox rounded-pill"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Reader's Name"
        />
        <label className="text-light h5">Lib.id</label>
        <input
          type="email"
          className="register__textBox rounded-pill"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <label className="text-light h5">Secret Key</label>
        <input
          type="password"
          className="register__textBox rounded-pill"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passkey"
        />
        <button className="btn btn-violet rounded-pill mt-3 mb-3" onClick={register}>
          Create Reader
        </button>
        <button
          className="btn btn-light rounded-pill mb-3"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div className="text-light">
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
    <div class="jumbotron fixed-bottom bg-black p-2">
           <div className="text-center">
            <a className="text-light" href="/">Gateway to Librepo</a>
            </div>
    </div>
  </>  
  );
}
export default Register;