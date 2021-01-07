import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';
import pic from '../pics/headshot2.png';
import resume from '../Resume.pdf'

class Sidebar extends Component {

  render() {

    const links = ['/Home', '/About', '/Skills', '/Education', '/Experience', '/Contact'];
    const names = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Contact'];
    const indexes = [0, 1, 2, 3, 4, 5];

    return(
      <div class = "Sidebar">
        <div class = "top">
            <img src = {pic} alt="Neil Nguyen - Headshot" class = "SidebarPic"/>
            <div class = "Name">Neil Nguyen</div>
            <div class = "Caption">Software Engineer in San Jose</div>
        </div>
        <div class = "buttons">
        {
          indexes.map(index =>(
            <NavLink to={links[index]} className="SidebarButton" activeClassName="SidebarButtonActive">
              {names[index]}
              </NavLink>
            ))
        }
        <a href={resume} className="SidebarButton" target="_blank" rel="noreferrer">Resume</a>
        </div>
        <a href="https://ayakkala1.github.io/ayakkala.github.io/index.html" target="_blank" rel="noreferrer">
          <div class = "hello">
            Hello :)
          </div>
        </a>
      </div>
    )
  }

}

export default Sidebar
