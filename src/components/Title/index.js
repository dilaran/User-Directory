import React from "react";
import "./style.css";

function Title(props) {
  return <div><h1 className="title">{props.children}</h1>
 
  <button onClick={() => props.remoteEmployee(props.id)} className="location">
        Show only Beverly Hills employees
      </button>
    <button onClick={() => props.sortBy(props.id)} className="name">
      Sort by name
    </button>
    </div>};


export default Title;
