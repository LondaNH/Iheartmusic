import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import '../styles/LoginForm.css';



function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  function Login() {
    const [email, setEmail ] = useState ("")
  }
  
  return (
    
    <div className="container-my-1">
      {/* <Link to="/signup">← Head to Sign Up Page</Link> */}
      {/* <form onSubmit={handleFormSubmit}> */}
        <div className="flex-row-space-between-my-4"> 
        <div className="wrap-login">
        <form className="login-form">
        <span className="login-form-title">Login</span>

        <div className="wrap-input">
          <input className="input"
           placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input className="input" 
          placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}/>
          <span className="focus-input" data-placeholder="Password"></span>
        </div>
        {error ? (
          <div>
            <p className="error-text">Oops, wrong credentials!</p>
          </div>
        ) : null}

        </form>
        <div className="container-form-login-btn">
          <button className="submit">Enter</button>
        </div>
        <div className="text-info">
          <span className="txt1">Don't have an account yet?</span>
          <a className="txt2" href="#">Create Account</a>
        </div>
        </div>

          {/* <label htmlFor="email">Email:</label> */}
          {/* changes made below 1*/}
          {/* <input className= "input-box"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          /> */}
        </div>
        {/* <div className="flex-row-space-between-my-4">
          <label htmlFor="pwd">Password:</label>
          changes made bellow 1
          <input className= "input-box"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div> */}
        {/* {error ? (
          <div>
            <p className="error-text">Oops, wrong credentials!</p>
          </div>
        ) : null} */}
      
        {/* </form> */}
    </div>
  );
}

export default Login;