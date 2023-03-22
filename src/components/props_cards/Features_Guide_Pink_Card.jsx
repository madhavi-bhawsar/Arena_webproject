import React from "react";

function Features_Guide_Pink_Card(props) {
    return (
      <div className="pink-card" id="card">
        <div className="card-pink-title" id="card-title">
          {props.heading}
        </div>
        <div className="card-fill">{props.content}</div>
        <a href="">Read more...</a>
      </div>
    );
}
export default Features_Guide_Pink_Card;
