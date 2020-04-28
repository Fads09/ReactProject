import React from "react";
import UserAPI from "../api";
import { Link } from "react-router-dom";
import './App.css';
import './headerUI.css';
import ReactPlayer from "react-player"


const videos = [{ address: 'https://www.youtube.com/watch?v=eIrMbAQSU34', category: 'java' },
                { address: 'https://www.youtube.com/watch?v=RRubcjpTkks', category: 'java' },
                { address: 'https://www.youtube.com/watch?v=GoXwIVyNvX0', category: 'java' },
                { address: 'https://www.youtube.com/watch?v=eIrMbAQSU34', category: 'java' }, 
                { address: 'https://www.youtube.com/watch?v=RRubcjpTkks', category: 'java' }, 
                { address: 'https://www.youtube.com/watch?v=GoXwIVyNvX0', category: 'java' } ];

const User = props => {
  const user = UserAPI.get(parseInt(props.match.params.number, 10));
  if (!user) {
    return <div>Sorry, but the user was not found</div>;
  }
  return (
      <div className="box">
        {/* <h2>Welcome {user.name} to your account overview </h2> */}
        {/* <nav>
          <ul className="list">
          <li><a href="/html/">HTML</a></li>
          <li><a href="/css/">CSS</a></li>
          <li><a href="/js/">JavaScript</a></li>
          <li><a href="/jquery/">jQuery</a></li>
          </ul>
        </nav> */}
        <div class="content">
          <div class="wrapper">
              {videos.map(video => (
                <ReactPlayer className="vid" url={video.address}  controls={true} height="300" width="350" />
              ))} 
          </div>
        </div>
          <div className='bottom-btn'>
            {/* <a className='btn-logout'><Link to="/Login" className='link'>Logout</Link></a> */}
        </div>
      </div>
  );
};

export default User;
