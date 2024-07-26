import { useState } from "react";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
    const loginPageStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        margin: "auto",
        padding: "24px",
        maxWidth: "400px",
        backgroundColor: "#f7f7f7",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    const inputStyles = {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        outline: "none",
    };

    const buttonStyles = {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#4CAF50",
        color: "white",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };

    const buttonHoverStyles = {
        backgroundColor: "#45a049",
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useLogin();

    const handleSubmit = () => {
        const validation = true;
        if (validation) {
            login({ email, password });
        } else {
            alert("Validation Failed");
        }
    };

    return (
        <div style={loginPageStyles}>
            <input 
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                style={inputStyles} 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                style={inputStyles} 
            />
            <button 
                onClick={handleSubmit} 
                style={{ ...buttonStyles }} 
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
            >
                Login
            </button>
        </div>
    );
};

export default LoginPage;
