import React from "react";

function Left_Authorities_card(props) {
    return (
        <div id="left-authority-card">
          <div className="person">
            <div className="circle"></div>
            <div id="align">
            {props.ranking}
            </div>
            <div className="content">{props.name}</div>
            <div className="card-fill">{props.contact}</div>
          </div>
          <div className="card-fill">
            <div className="title" id="align_center">
            {props.position}
            </div>
            {props.content}
          </div>
        </div>
    );
}
export default Left_Authorities_card;
