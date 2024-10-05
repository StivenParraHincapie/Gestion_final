import { useState, useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext'; 
import axios from 'axios';

const Login = () => {
    const { login } = useContext(AuthContext); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            login(response.data.user); 
            localStorage.setItem('token', response.data.token); 
        } catch (err) {
            setError('Error de inicio de sesión: ' + err.response.data.message);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.form}>
                <h2 style={styles.title}>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Iniciar Sesión</button>
                    {error && <p style={styles.errorMessage}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa', 
        fontFamily: 'Arial, sans-serif',
    },
    form: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
    },
    title: {
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    },
    buttonHover: {
        backgroundColor: '#0056b3', 
    },
    errorMessage: {
        color: 'red',
        marginTop: '10px',
    },
};

export default Login;
