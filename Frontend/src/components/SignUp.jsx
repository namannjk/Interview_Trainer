import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
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
          name : name,
          email: email,
          password: password,
        }),
      });
  
      console.log(response.status);
  
      if (response.status === 200) {
   
        alert("Registration Successfull");
      } else {

        alert("A user already exist with this email")
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("There is some erroe during resgistration");

    }
  
    // TODO: Submit the form data to your backend
  };
  

  return (
    <div className="bg-hero-pattern bg-cover h-screen flex justify-center items-center">
      <form className="flex flex-col w-[500px] p-5 bg-gray-300 gap-y-3 rounded-xl border-2 border-blue-300" 
      onSubmit={handleSubmit}>
      <input className="p-2 rounded-md text-center"
        type="text"
        placeholder="Your Full Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input className="p-2 rounded-md text-center"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input className="p-2 rounded-md text-center"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="w-full p-2 bg-blue-500 text-center border-2 border-blue-600 text-xl font-semibold rounded-lg text-white hover:bg-blue-700" 
      type="submit">Sign Up</button>
    </form>
    </div>
   
  );
};

export default SignUp;