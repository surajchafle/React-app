import { Link } from "react-router-dom";
import React from "react";
import blooddonate from "../Images/Login/BloodDonate.jpg";
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css' 
import Header from "./Header";

export default function Signup() {
  return (
    <>
    <Header/>
      <div className="wrapper signUp">
        <div className="illustration">
          <img src={blooddonate} alt="illustration" />
        </div>
        <div className="container">
        <div className="form">
          <div className="heading">CREATE AN ACCOUNT</div>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="name">E-Mail</label>
              <input type="text" id="name" placeholder="Enter your mail" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter you password"
              />
            </div>
            <button type="submit">Submit</button>
            <h2 className="or">OR</h2>
          </form>
          <p>
            Have an account ? <Link to="/login"> Login </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
