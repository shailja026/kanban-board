import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <nav className="navbar">
        <ul className="nav-menu">
          <button className="btn1">your board name</button>
          <li className="star-icon">&#x2605; </li>

          <button className="fas fa-user-friends">
            &#xf500; Workspace visible
          </button>
          <button> Board</button>
          <li className="nav-item dropdown">⬇️</li>
          <li className="nav-item"></li>
        </ul>
      </nav>
    </div>
  );
}

export default Main;
