import React, { useState } from 'react';
import axios from 'axios';


const Settings = () => {
    const [apiKeyPublic, setApiKeyPublic] = useState(localStorage.getItem('api_key') || '');
    const [apiKeyPrivate, setApiKeyPrivate] = useState('');
    const [minQuantity, setMinQuantity] = useState(localStorage.getItem('qtty') || '');
    const [preferredSymbol, setPreferredSymbol] = useState(localStorage.getItem('symbol') || '');
    const [canSell, setCanSell] = useState(localStorage.getItem('can_sell') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || '');

    const handleSubmitApi = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://trano-vacance.mg/kitapo/update/api', {
                apiKeyPublic,
                apiKeyPrivate,
                email
            });
            localStorage.setItem('api_key', response.data.data['api_key']);
            // window.location.reload()
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://trano-vacance.mg/kitapo/update/config', {
                canSell,
                preferredSymbol,
                minQuantity,
                email
            });
            localStorage.setItem('api_key', response.data.data['api_key']);
            // window.location.reload()
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ display: "flex" }}>
            <form onSubmit={handleSubmitApi} style={styles.form}>
                <div style={styles.inputContainer}>
                    <label htmlFor="apiKeyPublic" style={styles.label}>
                        API Key (Public)
                    </label>
                    <input
                        type="text"
                        id="apiKeyPublic"
                        value={apiKeyPublic}
                        onChange={(e) => setApiKeyPublic(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <label htmlFor="apiKeyPrivate" style={styles.label}>
                        API Key (Private)
                    </label>
                    <input
                        type="text"
                        id="apiKeyPrivate"
                        value={apiKeyPrivate}
                        onChange={(e) => setApiKeyPrivate(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.submitButton}>
                    Save API
                </button>

            </form>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputContainer}>
                    <label htmlFor="minQuantity" style={styles.label}>
                        Minimum buy USDT
                    </label>
                    <input
                        type="number"
                        id="minQuantity"
                        value={minQuantity}
                        onChange={(e) => setMinQuantity(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <label htmlFor="canSell" style={styles.label}>
                        Can Sell?
                    </label>
                    <select
                        id="canSell"
                        value={canSell}
                        onChange={(e) => setCanSell(e.target.value === 'true')}
                        style={styles.input}
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div style={styles.inputContainer}>
                    <label htmlFor="preferredSymbol" style={styles.label}>
                        Preferred Symbol
                    </label>
                    <select
                        id="preferredSymbol"
                        value={preferredSymbol}
                        onChange={(e) => setPreferredSymbol(e.target.value)}
                        style={styles.input}
                    >
                        <option value="">Random (ETH or BTC )</option>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                    </select>
                </div>
                <button type="submit" style={styles.submitButton}>
                    Save Settings
                </button>
            </form>
        </div>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',

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

export default Settings;
