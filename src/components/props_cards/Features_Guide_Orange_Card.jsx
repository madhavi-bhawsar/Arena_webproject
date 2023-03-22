import React from "react";

function Features_Guide_Orange_Card(props) {
    return (
      <div className="orange-card" id="card">
        <div className="card-orange-title" id="card-title">
          {props.heading}
        </div>
        <div className="card-fill">{props.content}</div>
        <a href="">Read more...</a>
      </div>
    );
}
export default Features_Guide_Orange_Card;
