import React, { useState } from 'react';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle register form submission
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            {/* <h2 style={styles.heading}>Create a new account</h2> */}
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
            <div style={styles.inputContainer}>
                <label htmlFor="confirmPassword" style={styles.label}>
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={styles.input}
                />
            </div>
            <button type="submit" style={styles.submitButton}>
                Create Account
            </button>
            <div style={styles.optionsContainer}>
                <label style={styles.checkboxLabel}>
                    <input type="checkbox" style={styles.checkbox} />
                    I agree to the terms and conditions
                </label>
            </div>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        // backgroundColor: '#fff',
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
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
    },
    checkboxLabel: {
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        color: '#0078d7',
    },
    checkbox: {
        marginRight: '0.5rem',
    },
    link: {
        fontSize: '1.2rem',
        color: '#0078d7',
        textDecoration: 'none',
        transition: 'all 0.2s ease-in-out',
        ':hover': {
            textDecoration: 'underline',
        },
    },
};

export default SignupForm;
