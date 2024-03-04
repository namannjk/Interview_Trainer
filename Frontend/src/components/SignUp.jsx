import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      console.log(response.status);
  
      if (response.status === 200) {
   
        console.log("Registration successful");
      } else {
  
        console.log("Registration failed");
        alert("A user already exist with this email")
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("There is some erroe during resgistration");

    }
  
    // TODO: Submit the form data to your backend
  };
  

  return (
    <div>
      <form className = "signup" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className = "btn btn-dark " type="submit">Sign Up</button>
    </form>
    </div>
   
  );
};

export default SignUp;