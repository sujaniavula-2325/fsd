import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  function loginMsg() {
    alert("Login Successful");
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />

        <button onClick={loginMsg}>Login</button><br /><br />

        <button type="button">
          New User? <Link to="/Register">Register</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;