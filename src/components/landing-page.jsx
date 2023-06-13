import React, { useState, useRef } from "react";
import img from "./images/logo.png";
import features_guide from "../features_guide.jsx";
import { Link } from "react-router-dom";
import society_images from "../society_pics.jsx";
import ImageViewer from "../carousel_image.jsx";

function Navibar() {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const selectedFeatureRef = useRef(null);

  const handleFeatureClick = (feature) => {
    if (!selectedFeatures.includes(feature)) {
      setSelectedFeatures((prevSelectedFeatures) => [
        ...prevSelectedFeatures,
        feature,
      ]);
    }
    selectedFeatureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <div id="flex-row">
          <div className="navheading">Arena</div>
          <Link to="/login" className="nav-links" style={{ marginLeft: "70%" }}>
            login
          </Link>
        </div>
        <div>
          <div
            className="videonav"
            style={{ height: "45em", top: "0", position: "absolute" }}
          >
            <video autoPlay loop muted className="video">
              <source src="https://player.vimeo.com/external/510463826.sd.mp4?s=38ff646fd853ba57e53d7036fa02bef1193b0344&profile_id=164&oauth2_token_id=57447761" />
            </video>
            <img
              src={img}
              alt="logo"
              className="center"
              style={{
                position: "absolute",
                top: "35%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></img>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "34em", width: "100%" }}>
        <div>
          <div
            id="flex-row"
            style={{
              padding: "5em 15%",
              background: "#EBEDEE",
              height: "45em",
            }}
          >
            <div
              style={{ height: "30em", width: "50%", background: "url("+"https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"+")" }}
            ></div>
            <div style={{ width: "50%", marginLeft: "4%" }}>
              <h1>What's new:</h1>
              <br />
              <div className="content">
                Arena solves society challenges by simplifying communication
                through mass invitations, facilitating blog sharing for
                community engagement, enabling online payments and maintenance
                transactions, streamlining grievance submission, and providing
                information on candidates and society-related matters. It
                enhances society functioning and connectivity.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="front_gradient"
          >
            <div>
              <h1>Features to help:</h1>
              <br />
              <h6>
                Helping you to connect with the society and stay informative
              </h6>
            </div>
            <br />
            <br />
            {selectedFeatures.length > 0 && (
              <div ref={selectedFeatureRef}>
                {selectedFeatures.map((feature) => (
                  <div
                    id="flex-row"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.25)",
                      margin: "10px 0px",
                      borderRadius: "20px",
                    }}
                    key={feature.id}
                  >
                    <div
                      style={{
                        height: "auto",
                        width: "auto",
                        backgroundColor: "grey",
                      }}
                    >
                      {}
                    </div>
                    <div>
                      <h1>{feature.heading}</h1>
                      <h4>{feature.about}</h4>
                      <hr />
                      <p>{feature.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="blog" style={{ paddingTop: "10px" }}>
              {features_guide.map((item) => (
                <div
                  className="blog-post"
                  style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
                  key={item.id}
                  onClick={() => handleFeatureClick(item)}
                >
                  <img src={item.img[0]} alt={item.heading} />
                  <h2 style={{ color: "white" }}>{item.heading}</h2>
                  <h7>{item.about.substring(0, 125)}</h7>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "5em 7%",
            background: "#EBEDEE",
            height: "57em",
          }}
        >
          <div
            id="flex-row"
            style={{
              background:
                "url(" +
                "https://images.unsplash.com/photo-1656055450593-5f9fc1e88b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZGVuJTIwbWV0YWxsaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" +
                ")",
              width: "auto",
              borderRadius: "20px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              padding: "10px",
            }}
          >
            <div>
              <div id="flex-row">
              <h1 className="title">About us</h1>
              <i class="fa fa-map-marker" aria-hidden="true" style={{fontSize:"3em", marginLeft:"70%"}}></i>
              </div>
              <p>
                <div>
                  <div
                    style={{
                      margin: "10px",
                      float: "left",
                    }}
                  >
                    <ImageViewer images={society_images} />
                  </div>
                </div>
                In the sprawling landscape of India, there exists a society
                where people live amidst a plethora of modern conveniences and
                amenities. This society serves as a testament to the progress
                and development of the nation, providing its residents with a
                seamless and comfortable living experience.
                <br />
                Nestled within this society are state-of-the-art facilities and
                supermarkets, offering a wide range of products and services to
                meet the diverse needs of its inhabitants. From daily essentials
                to luxury items, the supermarkets cater to every requirement,
                ensuring convenience and accessibility. Shopping becomes a
                delightful experience as individuals browse through well-stocked
                aisles, accompanied by friendly staff who provide personalized
                assistance.
                <br />
                Beyond supermarkets, the society boasts a comprehensive range of
                facilities that enhance the quality of life for its residents.
                Modern healthcare centers equipped with cutting-edge technology
                ensure accessible medical care for all. Educational institutions
                of international standards provide top-notch education,
                empowering the younger generation with knowledge and skills to
                excel in various fields.
                <br />
                Recreational facilities such as parks, sports complexes, and
                cultural centers add vibrancy to the society. Residents have
                ample opportunities for leisure and entertainment, engaging in
                sports activities, cultural events, and social gatherings. The
                society also embraces the importance of fitness and wellness,
                with well-equipped gyms and wellness centers catering to the
                health-conscious individuals.
                <br />
                Transportation infrastructure within the society is
                well-developed, with smooth connectivity and efficient public
                transportation systems. Residents can easily commute within and
                outside the society, connecting them to the wider city and its
                offerings.
                <br />
                Security and safety are of utmost importance in this society,
                with robust security measures and vigilant surveillance ensuring
                a peaceful living environment. Residents can have peace of mind,
                knowing that their well-being is safeguarded.
                <br />
                In this society, the seamless integration of facilities,
                supermarkets, and other necessities creates a convenient and
                comfortable living experience for its residents. It exemplifies
                the progress and modernity of India while maintaining the warmth
                and cultural heritage that make the country unique.
              </p>
            </div>
          </div>
        </div>
        <div className="front_gradient"
        >
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1455582916367-25f75bfc6710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Team Member"
                className="team-member-image"
              />
              <h4 className="team-member-name">John Doe</h4>
              <p className="team-member-position">CEO</p>
            </div>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Team Member"
                className="team-member-image"
              />
              <h4 className="team-member-name">Jane Smith</h4>
              <p className="team-member-position">COO</p>
            </div>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Team Member"
                className="team-member-image"
              />
              <h4 className="team-member-name">Mike Johnson</h4>
              <p className="team-member-position">CTO</p>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "5em 15%",
            background: "#EBEDEE",
            height: "20em",
            color:"gray"
          }}
        >
            <h1><b>Numbers Speak Louder</b></h1><br></br>
            <div id="flex-row">
                <div className="spaceven">
                    <h2>1500+</h2>
                    <h5>families</h5>
                </div>
                <div className="spaceven">
                    <h2>2000+</h2>
                    <h5>Houses</h5>
                </div>
                <div className="spaceven">
                    <h2>5000+</h2>
                    <h5>Login</h5>
                </div>
                <div className="spaceven">
                    <h2>50000+</h2>
                    <h5>members</h5>
                </div>
            </div>
            </div>
            
      </div>

    </div>
  );
}

export default Navibar;

// import React, { useState } from "react";
// import img from "./images/logo.png";
// import features_guide from "../features_guide.jsx";
// import { Link } from "react-router-dom";
// import Slide_carousel from "./slide_carousel";

// function Navibar() {
//   const [selectedFeatures, setSelectedFeatures] = useState([]);

//   const handleFeatureClick = (feature) => {
//     setSelectedFeatures((prevSelectedFeatures) => [...prevSelectedFeatures, feature]);
//   };

//   return (
//     <div style={{ overflowX: "hidden" }}>
//       <div>
//         <div id="flex-row">
//           <div className="navheading">Arena</div>
//           <Link to="/login" className="nav-links" style={{ marginLeft: "70%" }}>
//             login
//           </Link>
//         </div>
//         <div>
//           <div
//             className="videonav"
//             style={{ height: "45em", top: "0", position: "absolute" }}
//           >
//             <video autoPlay loop muted className="video">
//               <source src="https://player.vimeo.com/external/510463826.sd.mp4?s=38ff646fd853ba57e53d7036fa02bef1193b0344&profile_id=164&oauth2_token_id=57447761" />
//             </video>
//             <img
//               src={img}
//               alt="logo"
//               className="center"
//               style={{
//                 position: "absolute",
//                 top: "35%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//               }}
//             ></img>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <div style={{ textAlign: "center", marginTop: "34em", width: "100%" }}>
//         <div>
//           <div
//             id="flex-row"
//             style={{
//               padding: "5em 15%",
//               background: "#EBEDEE",
//               height: "45em",
//             }}
//           >
//             <div
//               style={{ height: "30em", width: "50%", background: "grey" }}
//             ></div>
//             <div style={{ width: "50%", marginLeft: "4%" }}>
//               <h1>What's new:</h1>
//               <br />
//               <div className="content">
//                 Arena solves society challenges by simplifying communication
//                 through mass invitations, facilitating blog sharing for
//                 community engagement, enabling online payments and maintenance
//                 transactions, streamlining grievance submission, and providing
//                 information on candidates and society-related matters. It
//                 enhances society functioning and connectivity.
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             style={{
//               background:
//                 "linear-gradient(164.34deg, #357486 30.52%, #FFB8B6 100%)",
//               height: "auto",
//               padding: "3em 15%",
//               color: "white",
//             }}
//           >
//             <div>
//               <h1>Features to help:</h1>
//               <br />
//               <h6>
//                 Helping you to connect with the society and stay informative
//               </h6>
//             </div>
//             <br />
//             <br />
//             {selectedFeatures.length > 0 && (
//               <div className="information" style={{ backgroundColor: "rgba(0,0,0,0.25)" }}>
//                 {selectedFeatures.map((feature) => (
//                   <div key={feature.id}>
//                     <div style={{ height: "auto", width: "auto", backgroundColor: "grey" }}>
//                       {/* Image carousel */}
//                     </div>
//                     <div>
//                       <h1>{feature.heading}</h1>
//                       <h4><b>About:</b></h4>
//                       <p>{feature.about}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <div className="blog" style={{ paddingTop: "10px" }}>
//               {features_guide.map((item) => (
//                 <div
//                   className="blog-post"
//                   style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
//                   key={item.id}
//                   onClick={() => handleFeatureClick(item)}
//                 >
//                   <img src={item.img[0]} alt={item.heading} />
//                   <h2 style={{ color: "white" }}>{item.heading}</h2>
//                   <h7>{item.about.substring(0, 125)}</h7>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navibar;

// import React, { useState } from "react";
// import img from "./images/logo.png";
// import features_guide from "../features_guide.jsx";
// import { Link } from "react-router-dom";
// import Slide_carousel from "./slide_carousel";

// function Navibar() {
//   const [selectedFeature, setSelectedFeature] = useState(null);

//   const handleFeatureClick = (feature) => {
//     setSelectedFeature(feature);
//   };

//   return (
//     <div style={{ overflowX: "hidden" }}>
//       <div>
//         <div id="flex-row">
//           <div className="navheading">Arena</div>
//           <Link to="/login" className="nav-links" style={{ marginLeft: "70%" }}>
//             login
//           </Link>
//         </div>
//         <div>
//           <div
//             className="videonav"
//             style={{ height: "45em", top: "0", position: "absolute" }}
//           >
//             <video autoPlay loop muted className="video">
//               <source src="https://player.vimeo.com/external/510463826.sd.mp4?s=38ff646fd853ba57e53d7036fa02bef1193b0344&profile_id=164&oauth2_token_id=57447761" />
//             </video>
//             <img
//               src={img}
//               alt="logo"
//               className="center"
//               style={{
//                 position: "absolute",
//                 top: "35%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//               }}
//             ></img>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <div style={{ textAlign: "center", marginTop: "34em", width: "100%" }}>
//         <div>
//           <div
//             id="flex-row"
//             style={{
//               padding: "5em 15%",
//               background: "#EBEDEE",
//               height: "45em",
//             }}
//           >
//             <div
//               style={{ height: "30em", width: "50%", background: "grey" }}
//             ></div>
//             <div style={{ width: "50%", marginLeft: "4%" }}>
//               <h1>What's new:</h1>
//               <br />
//               <div className="content">
//                 Arena solves society challenges by simplifying communication
//                 through mass invitations, facilitating blog sharing for
//                 community engagement, enabling online payments and maintenance
//                 transactions, streamlining grievance submission, and providing
//                 information on candidates and society-related matters. It
//                 enhances society functioning and connectivity.
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             style={{
//               background:
//                 "linear-gradient(164.34deg, #357486 30.52%, #FFB8B6 100%)",
//               height: "auto",
//               padding: "3em 15%",
//               color: "white",
//             }}
//           >
//             <div>
//               <h1>Features to help:</h1>
//               <br />
//               <h6>
//                 Helping you to connect with the society and stay informative
//               </h6>
//             </div>
//             <br />
//             <br />
//             {selectedFeature ? (
//               <div className="information" style={{ backgroundColor: "rgba(0,0,0,0.25)" }}>
//                 <div style={{ height: "auto", width: "auto", backgroundColor: "grey" }}>image carousel</div>
//                 <div>
//                   <h1>{selectedFeature.heading}</h1>
//                   <h4><b>About:</b></h4>
//                   <p>{selectedFeature.about}</p>
//                 </div>
//               </div>
//             ) : null}
//             <div className="blog" style={{ paddingTop: "10px" }}>
//               {features_guide.map((item) => (
//                 <div
//                   className="blog-post"
//                   style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
//                   key={item.id}
//                   onClick={() => handleFeatureClick(item)}
//                 >
//                   <img src={item.img[0]} alt={item.heading} />
//                   <h2 style={{ color: "white" }}>{item.heading}</h2>
//                   <h7>{item.about.substring(0, 125)}</h7>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navibar;
