import React, { useState } from 'react';

export default function LoginPage({ setUser }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setUser(username);
  };

  return (
    <div>
      {/* <h2>Login</h2> */}
      <form style={{display: 'flex', flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
          }} onSubmit={handleSubmit}>
        <h1 
        style={{width: '75%'}}>Please enter your desired username below</h1>
        <div style={{marginBottom: '2rem', fontSize: '2rem'}}>Username</div>
        <input
          type="text"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

