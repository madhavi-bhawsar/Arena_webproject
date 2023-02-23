import React from "react";
import star from "./images/star-icon.png";

function Authorities() {
  return (
    <div>
      <hr />
      <div className="title" id="align_center">
        <u> Authorities: </u>
      </div>
      <hr />
      <div className="left-centre">
        <div id="left-authority-card">
          <div className="person">
            <div className="circle"></div>
            <div>
              <img src={star} alt="prev img" id="small-icon"></img>
            </div>
            <div className="content">Narayan Naidu</div>
            <div className="card-fill">9783232232</div>
          </div>
          <div className="card-fill">
            <div className="title" id="align_center">
              Secretory
            </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem I
          </div>
        </div>
        <div id="right-authority-card">
          <div className="card-fill">
            <div className="title" id="align_center">
              Treasurer
            </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem I
          </div>
          <div className="person">
            <div className="circle"></div>
            <div>
              <img src={star} alt="prev img" id="small-icon"></img>
            </div>
            <div className="content">Damodar yele</div>
            <div className="card-fill">9783232232</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authorities;
