function Login({ setIsLoggedIn }) {
  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button onClick={() => setIsLoggedIn(true)}>
        Login
      </button>
    </div>
  );
}

export default Login;
