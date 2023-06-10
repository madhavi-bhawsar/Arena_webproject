import React from "react";
import authorities_doc from "../authorities_doc.jsx";

function Authorities() {
  return (
    <div style={{ marginBottom: "2em" }}>
      <hr />
      <div className="title" id="align_center">
        <u> Authorities: </u>
      </div>
      <hr />
      <div className="left-centre">
        {authorities_doc.map((authority, index) => {
          const isEven = index % 2 === 0;
          const cardId = isEven ? "left-authority-card" : "right-authority-card";
          return (
            <div id={cardId}>
              <div className="person">
                <div className="circle"></div>
                <div id="align">{authority.ranking}</div>
                <div className="content">{authority.name}</div>
                <div className="card-fill">{authority.contact}</div>
              </div>
              <div className="card-fill">
                <div
                  style={{ fontFamily: "monospace", fontSize: "2em" }}
                  id="align_center"
                >
                  {authority.position}
                </div>
                {authority.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Authorities;
