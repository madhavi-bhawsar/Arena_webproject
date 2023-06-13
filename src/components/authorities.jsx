import React, { useEffect, useState } from "react";
// import authorities_doc from "../authorities_doc.jsx";


function Authorities() {
  const [authorities_docs, setNotes] = useState([]);

  useEffect(() => {
    fetch('/authorities')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setNotes(jsonRes))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="result-bg" style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1623042881382-cf8b93f284d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5hdnklMjBibHVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" + ")" , overflowY:"scroll"}}>
    {/* </div> <div className="result-bg" style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1623300834538-538d044aff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdnklMjBibHVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" + ")" , overflow:"scroll"}}> */}
    <div style={{ marginBottom: "2em" }}>
      <hr />
      <div className="title" id="align_center" style={{color:"white"}}>
        <u> Authorities: </u>
      </div>
      <div className="left-centre">
        {authorities_docs.map((authority, index) => {
          const isEven = index % 2 === 0;
          const cardId = isEven ? "none" : "right-authority-card";
          return (
            <div className="left-authority-card" id={cardId}>
              <div className="person">
                <img src={authority.image} className="circle" alt="person"></img>
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
    </div>
  );
}

export default Authorities;
