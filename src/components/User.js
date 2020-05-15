import React from "react"
import { Link } from "react-router-dom"
import './App.css';
import './headerUI.css';
import ReactPlayer from "react-player"
import data from "./data"


 class User extends React.Component { 
  constructor(props){
      super(props);
      this.state={
        videos : data,
        filtered: data
      };
    }
    
      handleClick = (event) => {
        const value = event.target.value;
        this.setState({ filtered: this.state.videos.filter(item => { 
                return item.category === value
            })
        })
   }

    render(){  
    return (
        <div className="box">
          {/* <h2>Welcome {user.name} to your account overview </h2> */}
            <div className="buttons-filter">
            <button value="java" onClick={this.handleClick}>Java</button>
            <button value="React" onClick={this.handleClick}>React</button>
            <button value="C#" onClick={this.handleClick}>C#</button>
            <button value="javascript" onClick={this.handleClick}>JavaScript</button> 
        </div>
        <div className="content">
            <div className="wrapper">
                  {this.state.filtered.map(video => (
                    <ReactPlayer className="vid" url={video.address}  controls={true} height="300" width="350" />
                  ))} 
            </div>
        </div>
            <div className='bottom-btn'>
              {/* <a className='btn-logout'><Link to="/Login" className='link'>Logout</Link></a> */}
            </div>
        </div>
    );
  }
};

export default User;
