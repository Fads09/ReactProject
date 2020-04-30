import React from "react";
import UserAPI from "../api";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import './App.css';
 
const LoginForm = () => (
  <div >
      <div className="loginFormWrapper">
          <div className="wrap">
                <InputField
                    type='text'
                    placeholder='Username'
                    onChange={ (val) => this.setInputValue('username', val)}
                />
                <InputField
                    type='password'
                    placeholder='Password'
                    onChange={ (val) => this.setInputValue('password', val)
                }
                />


                {UserAPI.all().map(p => (

                    <Link to={`/Login/${p.number}`}>
                    <div className="submitButton">
                        <button className='btn'>
                            Login
                        </button>
                        
                    </div>

                    </Link>

                ))}
      </div>
    </div>
  </div>
);

export default LoginForm;
