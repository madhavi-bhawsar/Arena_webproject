import React from "react";
import star from "./images/star-icon.png";

function Authorities() {
  return (
    <div>
        <hr />
        <div className="title" id="align_center"><u> Authorities: </u></div>
        <hr/>
        <div className="left-centre" >
            <div id="left-authority-card">
                <div className="person">
                    <div className="circle"></div>
                    <div>
                        <img src={star} alt="prev img" id="small-icon"></img>
                    </div>
                    <div className="content">
                        Narayan Naidu
                    </div>
                </div>
                <div className="content">

                </div>
            </div>
            <div id="right-authority-card">
                <div className="content">
                    
                </div>
                <div className="person">
                    <div className="circle"></div>
                    <div>
                        <img src={star} alt="prev img" id="small-icon"></img>
                    </div>
                    <div className="content">
                        Damodar yele
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
};

export default Authorities;