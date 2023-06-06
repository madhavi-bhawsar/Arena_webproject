import React from "react";
import Left_Authorities_card from "./props_cards/Left_Authorities_Card.jsx";
import Right_Authorities_card from "./props_cards/Right_Authorities_Card.jsx";
import authorities_doc from "../authorities_doc.jsx";

function create_authority(term) {
  var k =term.id
  if(k%2===0){
    return (
      <Left_Authorities_card
        key={term.id}
        position={term.position}
        content={term.content}
        name={term.name}
        contact={term.contact}
        ranking={term.ranking}
        image={term.image}
      />
    );
  }else{
    return (
      <Right_Authorities_card
      key={term.id}
      position={term.position}
      content={term.content}
      name={term.name}
      contact={term.contact}
      ranking={term.ranking}
      image={term.image}
      />
    );
  }
}

function Authorities() {
  return (
    <div style={{marginBottom:"2em"}}>
      <hr />
      <div className="title" id="align_center">
        <u> Authorities: </u>
      </div>
      <hr />
      <div className="left-centre">
      {authorities_doc.map(create_authority)}

        
      </div>
    </div>
  );
}

export default Authorities;
