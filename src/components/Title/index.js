import React from "react";
import "./style.css";

function Title(props) {
  return <div><h1 className="title">Employee list</h1>
 
  <button onClick={() => props.remoteEmployee(props.id)} className="remote">
        Show only remote employees
      </button>
    <button onClick={() => props.sortEmployee(props.id)} className="salary">
      Sort occupation from a to z
    </button></div>
}

export default Title;
