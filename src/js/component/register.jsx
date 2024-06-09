import React, { useState, useEffect } from "react";

import register_bg from "../../img/bg.jpg";

import { db } from "../helper/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import RotateLoader from "react-spinners/RotateLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

//create your first component
const Registration = () => {
  const [pradesh, setPradesh] = useState("");
  const [mandal, setMandal] = useState("");
  const [ref_person, setRefPerson] = useState("");
  const [uname, setUname] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [place, setPlace] = useState("");
  const [pass, setPass] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const [disableSubmit, setDisableSubmit] = useState(false);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  const createUser = async (newUser) => {
    await addDoc(usersCollectionRef, newUser);
    getUsers();
  };

  const updateUser = async (id, marks) => {
    const userDoc = doc(db, "users", id);
    const newFields = { marks: marks + 1 };
    await updateDoc(userDoc, newFields);
    getUsers();
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const navigateToHome = () => {
    window.location.href = "/";
  };

  const handleSubmit = () => {
    setDisableSubmit(true);
    if (pradesh === "") {
      alert("Please select Pradesh!");
    } else if (mandal === "") {
      alert("Please select Mandal!");
    } else if (ref_person === "") {
      alert("Please select Reference Karyakarta!");
    } else if (uname === "") {
      alert("Please enter your Name!");
    } else if (phone_number === "") {
      alert("Please enter your Mobile Number!");
    } else if (phone_number.length !== 10) {
      alert("Please enter valid Mobile Number!");
    } else if (email === "") {
      alert("Please enter your Email!");
    } else if (birthdate === "") {
      alert("Please enter your Birthdate!");
    } else if (place === "") {
      alert("Please select your Place!");
    } else if (pass === "") {
      alert("Please enter your Password!");
    } else {
      createUser({
        pradesh: pradesh,
        mandal: mandal,
        ref_person: ref_person,
        uname: uname,
        phone_number: phone_number,
        email: email,
        birthdate: birthdate,
        place: place,
        pass: pass,
      })
        .then(() => {
          setDisableSubmit(false);
          setSuccess(true);
        })
        .catch(() => {
          setDisableSubmit(false);
        });
    }
  };

  if (success) {
    return (
      <div
        className="thanks-container-main"
        style={{
          backgroundImage: `url(${register_bg})`,
        }}
      >
        <div className="thanks-container">
          <h3 style={{ color: "#730941" }}>Jay Swaminarayan!</h3>
          <h1 style={{ color: "#730941" }}>Thank you!</h1>
          <p style={{ color: "#730941" }}>
            Your Data is Successfully Registered!
          </p>
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="register-submit-btn"
              onClick={navigateToHome}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="register-container"
      style={{
        backgroundImage: `url(${register_bg})`,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#730941",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Register Your Details
      </h1>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="pradesh">Pradesh:</label>
          <select
            name="pradesh"
            id="pradesh"
            onChange={(e) => setPradesh(e.target.value)}
            value={pradesh}
          >
            <option value="">Select Pradesh</option>
            <option value="Shree Hari">શ્રી હરિ પ્રદેશ</option>
            <option value="Sunrut">સુનૃર્ત પ્રદેશ</option>
            <option value="Dharmbhakti">ધર્મભક્તિ</option>
          </select>
          {/* <span class="error">{{ pradesh_error }}</span> */}
        </div>
        <div className="form-group">
          <label htmlFor="mandal">Mandal:</label>
          <select
            name="mandal"
            id="mandal"
            onChange={(e) => setMandal(e.target.value)}
            value={mandal}
          >
            <option value="">Select Mandal</option>
            <option value="Ved Mandal">વેડ મંડળ</option>
            <option value="Katargam">કતારગામ મંડળ</option>
            <option value="Vihar">વિહાર મંડળ</option>
            <option value="Rupal">રૂપલ મંડળ</option>
            <option value="Bhula Park">ભૂલા પાર્ક મંડળ</option>
          </select>
          {/* <span class="error">{{ mandal_error }}</span> */}
        </div>
        <div className="form-group">
          <label htmlFor="ref_person">Reference Karyakarta:</label>
          <select
            name="ref_person"
            id="ref_person"
            onChange={(e) => setRefPerson(e.target.value)}
            value={ref_person}
          >
            <option value="">Select Karyakarta</option>
            <option value="Hemantbhai">હેમંતભાઈ</option>
            <option value="Ramanbhai">રમણભાઈ</option>
          </select>
          {/* <span class="error">{{ ref_person_error }}</span> */}
        </div>
        <div className="form-group">
          <label htmlFor="uname">Name:</label>
          <input
            type="text"
            name="uname"
            id="uname"
            placeholder="Enter Your Full Name"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
          {/* <span class="error">{{ name_error }}</span> */}
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Mobile Number:</label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {/* <span class="error">{{ phone_error }}</span> */}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <span class="error">{{ email_error }}</span> */}
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Date Of Birth:</label>
          <input
            type="date"
            name="birthdate"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          {/* <span class="error">{{ birthdate_error }}</span> */}
        </div>
        <div className="form-group radio-group">
          <label htmlFor="place">Place:</label>
          <input
            type="radio"
            name="place"
            value="main"
            onChange={(e) => setPlace(e.target.value)}
          />
          Main area
          <input
            type="radio"
            name="place"
            value="general"
            onChange={(e) => setPlace(e.target.value)}
          />
          General area
          {/* <span class="error">{{ place_error }}</span> */}
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {/* <span class="error">{{ pass_error }}</span> */}
        </div>
        <div className="form-group" style={{ textAlign: "center" }}>
          {disableSubmit ? (
            <RotateLoader
              color={"#730941"}
              loading={disableSubmit}
              cssOverride={override}
              size={75}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <button
              type="submit"
              className="register-submit-btn"
              onClick={handleSubmit}
              disabled={disableSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
