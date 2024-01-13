import React from "react";

function Card(props) {
    return (
       
        <div className="card">
          <div className="top">
            <p className="name">{props.id}</p>
            <h2 className="name">{props.name}</h2>
          </div>
          <div className="bottom">
           <p>{props.tell}</p>
           <p>{props.email}</p>
          </div>
        </div>
    
    );
}

export default Card;