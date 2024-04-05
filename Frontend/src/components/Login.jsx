import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userInfoSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState(0);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  


  const onButtonClick = async (event) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          id : id
        }),
      });

      const Data = await response.json();
      const responseData = Data.user;
      console.log(responseData);
      if (responseData.name) {
        alert("Successfully login");
        const {name , email , _id} = responseData;
        console.log(_id);
        dispatch(addUser({name,email,_id}));
        if(Data.id==1)
        navigate(`/book/${_id}`);
        else
        navigate(`/interviewer-dahboard/${_id}`);
      } else {
        alert("Invalid password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Internal 404 error");
    }
  }

  return (
    <>
      <div className={'mainContainer'}>
        <div className={'titleContainer'}>
          <div>Login</div>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className="flex">
          <div>
       <input type="radio" id="Interviewer" name="fav_language" value="Interviewer" onClick={()=>setId(0)}/>
       <label for="Interviewer">Interviewer</label>
       </div>
       <div>
       <input type="radio" id="Candidate" name="fav_language" value="Candidate" onClick={()=>setId(1)}/>
       <label for="Candidate">Candidate</label>
       </div>
       </div>

        <div className={'inputContainer'}>
          <input className="bg-black p-2 m-2 text-white rounded-md" type="button" onClick={onButtonClick} value={'Log in'} />
        </div>
      </div>
    </>
  );
}

export default Login;
