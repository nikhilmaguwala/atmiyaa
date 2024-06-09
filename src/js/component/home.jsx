import React from "react";

import login from "../../img/login.jpg";

//create your first component
const Home = () => {
  const gotoRegistrationForm = () => {
    window.location.href = "/register";
  };

  return (
    <div>
      <div
        className="background"
        style={{ backgroundImage: `url(${login})` }}
      ></div>
      <div
        className="form-group"
        style={{
          textAlign: "center",
        }}
      >
        <button
          name="Registration"
          value="Registration"
          className="submit-btn"
          onClick={gotoRegistrationForm}
        >
          Registration
        </button>
      </div>
    </div>
  );
};

export default Home;
