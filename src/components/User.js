import React from "react";
import UserAPI from "../api";
import { Link } from "react-router-dom";
import './App.css';
import './headerUI.css';
import ReactPlayer from "react-player"


const data = [{ address: 'https://www.youtube.com/watch?v=eIrMbAQSU34', category: 'java' },
                { address: 'https://www.youtube.com/watch?v=RRubcjpTkks', category: 'C#' },
                { address: 'https://www.youtube.com/watch?v=GoXwIVyNvX0', category: 'javascript' },
                { address: 'https://www.youtube.com/watch?v=eIrMbAQSU34', category: 'React' }, 
                { address: 'https://www.youtube.com/watch?v=RRubcjpTkks', category: 'java' }, 
                { address: 'https://www.youtube.com/watch?v=GoXwIVyNvX0', category: 'java' } ];

 class User extends React.Component { 
   constructor(props){
     super(props);
     this.state={
      videos : data,
     }
   }
  //Not part of requirements yet
  // const user = UserAPI.get(parseInt(props.match.params.number, 10));
  // if (!user) {
  //   return <div>Sorry, but the user was not found</div>;
  // }

    render(){
      console.log(this.state);
    return (
        <div className="box">
          {/* <h2>Welcome {user.name} to your account overview </h2> */}
          <div className="buttons-filter">
        <button onClick={()=>{
            this.setState({videos: data })
            
          }}>All</button>
          <button id="btnJava" onClick={()=>{
               this.setState({videos: data },()=>{
                this.setState({
                  videos: this.state.videos.filter(item => { return item.category=='java';})
              })
               })           
            
          }}>
            java
          </button>
          <button id="btnC#"onClick={()=>{
              this.setState({videos: data },()=>{
                this.setState({
                  videos: this.state.videos.filter(item => { return item.category=='C#';})
              })})
 
          }}>
            C#
          </button>
          <button id="btnjs" onClick={()=>{
            this.setState({videos: data },()=>{
              this.setState({
                videos: this.state.videos.filter(item => { return item.category=='javascript';})
            })
            })

            
          }}>
            javascript
          </button>
          <button id="btnReact" onClick={()=>{
            this.setState({videos: data },()=>{
              this.setState({
                videos: this.state.videos.filter(item => {return item.category=='React';})
            })
            })
           
            
          }} >
            React
          </button>
          </div>
          <div className="content">
            <div className="wrapper">
                {this.state.videos.map(video => (
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
