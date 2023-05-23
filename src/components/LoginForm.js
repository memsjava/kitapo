import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {

  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://trano-vacance.mg/kitapo/login', {
        email,
        password,
      });
      // console.log(response.data.data)

      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('email', email);
      localStorage.setItem('api_key', response.data.data['api_key']);
      localStorage.setItem('can_sell', response.data.data['can_sell']);
      localStorage.setItem('qtty', response.data.data['qtty']);
      localStorage.setItem('symbol', response.data.data['symbol']);
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {/* <h2 style={styles.heading}>Welcome back to Skype</h2> */}
      <div style={styles.inputContainer}>
        <label htmlFor="email" style={styles.label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <label htmlFor="password" style={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.submitButton}>
        Sign In
      </button>
      <div style={styles.optionsContainer}>
        <label style={styles.checkboxLabel}>
          <input type="checkbox" style={styles.checkbox} />
          Keep me signed in
        </label>
        <a href="/" style={styles.link}>
          Forgot my password
        </a>
      </div>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    padding: '2rem',
    // backgroundColor: '#fff',
    borderRadius: '0.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '480px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
    fontWeight: 'normal',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
  },
  label: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: '#0078d7',
  },
  input: {
    fontSize: '1.2rem',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    border: '1px solid #0078d7',
  },
  submitButton: {
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    border: 'none',
    backgroundColor: '#0078d7',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    marginTop: '1rem',
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '1rem',
    fontSize: '0.9rem',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    color: '#555',
  },
  checkbox: {
    marginRight: '0.5rem',
  },
  link: {
    color: '#0078d7',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      textDecoration: 'underline',
    },
  },
};

export default LoginForm;



