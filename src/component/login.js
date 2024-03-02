import React, { useState } from 'react';
import { ReactComponent as LoginSVG } from './login.svg';
import { ReactComponent as SignupSVG } from './signup.svg';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Logged in with username:', username, 'and password:', password);
    // You can redirect or perform other actions after login
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <LoginSVG className="login-svg" />
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here
    console.log('Signed up with username:', username, 'and password:', password);
    // You can redirect or perform other actions after signup
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <SignupSVG className="signup-svg" />
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <LoginPage />
      <SignupPage />
    </div>
  );
}