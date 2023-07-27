import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const validUsername = 'Prashant';
        const validPassword = 'Prashant@123';
        // Handle form submission logic here
        // console.log('Username:', Username);
        // console.log('Password:', password);
        // // Reset form fields
        // setUsername('');
        // setPassword('');

        if (Username === validUsername && password === validPassword) {
            // Here, you can perform the form submission or other actions you want.
            // For example, you can navigate to the Employee page using the 'react-router-dom' history.

            // Assuming you have imported 'useHistory' from 'react-router-dom':
            // const history = useHistory();
            // history.push('/Employee');

            // For now, let's just log a success message
            console.log('Login successful!');

            // You can reset the form fields after successful login
            setUsername('');
            setPassword('');
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid username or password. Please try again.');
        }
    };

    const isFormValid = Username.trim() !== '' && password.trim() !== '';

    return (
        <div className="loginbox">
            <form onSubmit={handleSubmit} className="Form">
                <div className="Username">
                    <label htmlFor="Username">Username : </label>
                    <input
                        placeholder="Enter your Username"
                        type="Username"
                        id="Username"
                        value={Username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="Password">
                    <label htmlFor="password">Password : </label>
                    <input
                        placeholder="Enter your Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="btn">
                    <Link to="/Employee" className="link-style">
                        <button type="submit" className="btn-submit"  disabled={!Username || !password} onClick={() => {

                        }}>Submit</button>
                    </Link>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
}
export default LoginPage;

