import React from 'react';

const Login = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '100px'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', width: '300px' }} type="text" placeholder="Username" />
        <input style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', width: '300px' }} type="email" placeholder="Email" />
        <input style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', width: '300px' }} type="password" placeholder="Password" />
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
