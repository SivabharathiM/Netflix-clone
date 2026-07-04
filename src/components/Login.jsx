import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Submit Function
  const handleSubmit = async (e) => {

    e.preventDefault();

    // Clear old messages
    setError("");
    setSuccess("");

    // Frontend Validation
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {

      // API Request
      const response = await axios.post(
        "https://netflix-clone-mern-w35j.onrender.com/login",
        {
          email,
          password,
        }
      );

      // Success
      setSuccess(response.data.message);

      console.log(response.data);
      // Redirect to Dashboard
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);


    } catch (err) {

      // Backend Error
      if (err.response) {

        setError(
          err.response.data.message
        );

      } else {

        // Server Error
        setError(
          "Server error. Please try again later."
        );

      }

      console.log(err);

    }
  };

  return (
     
    
    <div className="login-container">
      <div className="overlay">
   
        <form
          className="login-box"
          onSubmit={handleSubmit}
        >
             <img
  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  alt="Netflix"
  className="netflix-logo"
/>
          <h1>Sign In</h1>

          {/* Error Message */}
          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          {/* Success Message */}
          {success && (
            <p className="success-message">
              {success}
            </p>
          )}
        
          {/* Email */}
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Sign In
          </button>

        </form>

      </div>
    </div>
  );
};


export default Login;