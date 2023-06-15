import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css"; // Import the CSS file

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("/user");
      const user = response.data;
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setAddress(user.address);
      setContact(user.contact);
      setPassword(user.password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.put("/user", {
        firstName,
        lastName,
        address,
        contact,
        password,
      });
      setEditing(false);
      setMessage("Profile updated successfully");
    } catch (error) {
      console.error(error);
      setMessage("Error updating profile");
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {message && <p className="message">{message}</p>}
      <div className="profile-details">
        <div>
          <strong>First Name:</strong>
          {editing ? (
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          ) : (
            <span>{firstName}</span>
          )}
        </div>
        <div>
          <strong>Last Name:</strong>
          {editing ? (
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          ) : (
            <span>{lastName}</span>
          )}
        </div>
        <div>
          <strong>Address:</strong>
          {editing ? (
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : (
            <span>{address}</span>
          )}
        </div>
        <div>
          <strong>Contact:</strong>
          {editing ? (
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          ) : (
            <span>{contact}</span>
          )}
        </div>
        <div>
          <strong>Password:</strong>
          {editing ? (
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : (
            <span>{password}</span>
          )}
        </div>
      </div>
      <div className="profile-actions">
        {!editing ? (
          <button onClick={handleEdit}>Edit</button>
        ) : (
          <button onClick={handleSave}>Save</button>
        )}
      </div>
    </div>
  );
}

export default Profile;
