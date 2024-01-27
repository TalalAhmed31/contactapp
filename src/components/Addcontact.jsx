import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="ui main" style={containerStyle}>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label style={labelStyle}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div className="field">
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div className="field" style={buttonContainerStyle}>
            <button className="ui button" style={buttonStyle}>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const containerStyle = {
  margin: "50px auto", // Add margin at the top and center the container
  padding: "20px",
  background: "linear-gradient(135deg, #b3c6d8, #7da1bf)",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const labelStyle = {
  display: "block", // Ensure labels are on their own line
  marginBottom: "5px", // Add some space between label and input
  fontWeight: "bold",
  color: "#333", // Set label text color
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  width: "100%",
  marginBottom: "15px",
};

const buttonContainerStyle = {
  textAlign: "center", // Center the content horizontally
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  background: "#3266a8", // Adjusted to match the existing gradient
  color: "#fff",
  border: "none",
  cursor: "pointer",
  transition: "background 0.3s ease",
  width: "50%",
};

export default AddContact;
