
import React from "react";
import UserAPI from "../api";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import './App.css';
 
class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            //buttonDisabled: false
        }
    }

    setInputValue(property, val){
        val = val.trim();
        if(val.length > 12)
        {
            return;
        }

        this.setState({
            [property]: val
        })
    }

    handleClick(){
        localStorage.setItem('isLoggedIn', true);
  
    }
    render(){
        return (

                <div className="loginFormContainer" >

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
                                onChange={ (val) => this.setInputValue('password', val)}
                            />

                            {UserAPI.all().map(p => (

                                <Link to={`/Login/${p.number}`}>
                                    <div className="submitButton">
                                        <button onClick={this.handleClick} className='btn'>
                                            Login
                                        </button>
                                        
                                    </div>
                                </Link>

                            ))}
                        </div>
                    </div>
                </div>

        );
    }
}

export default LoginForm;
