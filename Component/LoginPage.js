import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Username:', Username);
        console.log('Password:', password);
        // Reset form fields
        setUsername('');
        setPassword('');
    };

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
                    <Link to="/Employee">
                        <button type="submit" className="btn-submit" onClick={() => {

                        }}>Submit</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
export default LoginPage;

