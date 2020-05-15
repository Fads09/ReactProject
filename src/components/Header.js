import React from "react";
import { Link } from "react-router-dom";
import './App.css';

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component{
  constructor()
  {
    console.log("Header constructor")
    super()
    this.state={isLoggedIn:false}
  }

  handleLoginClick=()=>
  {

    localStorage.setItem('isLoggedIn', false)
    this.setState(()=>{return {isLoggedIn:localStorage.getItem("isLoggedIn")}})
  }

  componentDidMount(){
  
    this.setState(()=>{return {isLoggedIn:localStorage.getItem("isLoggedIn")}})
  }

  componentDidUpdate(){
    console.log("Header componentDidUpdate")
    // this.setState(()=>{return {isLoggedIn:localStorage.getItem("isLoggedIn")}})
  }
  printLogin(){
    console.log("Header isLoggedIn state is :" + this.state.isLoggedIn)
    var x = this.state.isLoggedIn === true? "Logout" : "Login"
    return x;
  }
  render(){
    console.log("From header, isLoggedIn is "+ localStorage.getItem("isLoggedIn"))

    return(
      <header >
        <nav className='topnav'>
          <img  className="logo-img"
                src="https://becloudready.com/wp-content/uploads/2020/03/logo-no-text-small-150.svg" 
                srcset="https://becloudready.com/wp-content/uploads/2020/03/logo-no-text-small-150.svg 1x"
                width="" 
                height="40px" 
                alt="AI, Big Data and Cloud Logo"/>
          <ul>
              <li>
                <div onClick={this.handleLoginClick}>
                  <Link to="/Login">
                    {
                      // console.log("Header isLoggedIn state is :" + this.state.isLoggedIn)
                      console.log("Header localStorage.getItem isLoggedIn is :" + localStorage.getItem("isLoggedIn"))
                    }
                    {
                      // this.state.isLoggedIn === true? "Logout" : "Login"
                      localStorage.getItem("isLoggedIn") ? "Logout" : "Login"
                    }
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              
          </ul>
        </nav>
      </header>
    )
  }
}
export default Header;
