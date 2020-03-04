import React from "react";
import "./style.css";

function Title(props) {
  return <div><h1 className="title">Employee list</h1>
 
  <button onClick={() => props.remoteEmployee(props.id)} className="location">
        Show only Beverly Hills employees
      </button>
    <button onClick={() => props.sortEmployee(props.id)} className="name">
      Sort salaries
    </button>
    </div>};


export default Title;
