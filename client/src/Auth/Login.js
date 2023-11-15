import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            // Simulate a successful login response (remove axios post call)
            const fakeResponse = {
                success: true,
                message: 'Logged In Successfully',
                user: {
                    name: 'John Doe', // Replace with user data
                    email: email, // Use the email from the form input
                    // Add other user details as needed
                },
                token: 'fakeAuthToken', // Replace with a token or remove if not needed
            };

            // Simulate successful login
            toast.success(fakeResponse.message);
            setAuth({
                ...auth,
                user: fakeResponse.user,
                token: fakeResponse.token,
            });
            localStorage.setItem('auth', JSON.stringify(fakeResponse));
            navigate('/welcome'); // Redirect to welcome page
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
        }
    };

    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">LOGIN FORM</h4>

                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
