import React from "react";
import Card from "./Card";
import trainees from "../trainees";

function createCard(contact) {
    return <Card 
      key={contact.id}
      id={contact.id}
      name={contact.name}
      tell={contact.tell}
      email={contact.email}
    />
  }

  function App() {
    return (
        <div>
          <h1 className="heading">My Contacts</h1>
           {trainees.map(createCard)}
        </div>
        )
    };

export default App;