import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const cardStyle = {
    background: "white",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const contentStyle = {
    flex: "1",
    marginLeft: "20px",
  };

  const headerStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const iconStyle = {
    color: "red",
    fontSize: "1.5rem",
    cursor: "pointer",
  };

  return (
    <div className="item" style={cardStyle}>
      <img className="ui avatar image" src={user} alt="user" />
      <div style={contentStyle}>
        <div style={headerStyle}>{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={iconStyle}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
