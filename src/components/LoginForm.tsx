import React from 'react';
import { Link } from 'react-router-dom';
import blooddonate from "../Images/Login/BloodDonate.jpg";
import Header from "./Header";

const preventRefresh = (e: React.FormEvent) => {
	e.preventDefault();
};

export default function Login() {
	return (
		<>
		<Header/>
		<div className="wrapper signIn">
			<div className="illustration">
				<img src={blooddonate} alt="illustration" />
			</div>
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Enter your name" />
					</div>
					<div>
						<label htmlFor="e-mail">E-Mail</label>
						<input type="email" id="e-mail" placeholder="Enter you mail" />
					</div>
					<button type="submit" onClick={preventRefresh}>
						Submit
					</button>
				</form>
				<p>
					Don't have an account ? <Link to="/signup"> Sign In </Link>
				</p>
			</div>
		</div>
		</>
	);
}
