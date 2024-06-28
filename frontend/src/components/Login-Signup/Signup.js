import React, { useState } from "react";
import * as signupFunc from "./SignupFunctions";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import "./signup.css";

export default function Signup({ history }) {
    const [newUser, setNewUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangeEvent = (e, field) => {
        const fieldValue = e.target.value;
        setNewUser({ ...newUser, [field]: fieldValue });
    };

    const getToSignIn = (e) => {
        e.preventDefault();
        history.push("/login");
    };

    const submitData = async (e) => {
        e.preventDefault();
        console.log("Submitting data...", newUser);  // Add this line to log the form data
        try {
            const response = await signupFunc.registerUser(newUser);
            console.log("Registration successful:", response.data);
            history.push("/login");
        } catch (error) {
            console.error("Registration error:", error);
            setErrorMessage('Registration failed. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="flex-container">
                <div className="row full">
                    <div className="col-md-12">
                        <div className="form-container">
                            <div className="form-container-in"></div>
                            <div className="row sgnUp">
                                <div className="col-md-6 right-divider pdding">
                                    <h3 className="lead-text mn-txt">Join Us with Social</h3>
                                    <div className="icon-soc-fb">
                                        <FaFacebookF />
                                    </div>
                                    <div className="icon-soc-tw">
                                        <FaTwitterSquare />
                                    </div>
                                </div>
                                <div className="left-divider">
                                    <div className="col-md-6">
                                        <form onSubmit={submitData}>
                                            <div className="form-group2">
                                                <label htmlFor="name">Name:</label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    className="form-control sgnUp"
                                                    onChange={(e) => handleChangeEvent(e, "name")}
                                                />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="email">Email - ID:</label>
                                                <input
                                                    required
                                                    id="email"
                                                    type="email"
                                                    className="form-control sgnUp"
                                                    onChange={(e) => handleChangeEvent(e, "email")}
                                                />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="mob-number">Mobile - No.:</label>
                                                <input
                                                    required
                                                    id="mob-number"
                                                    type="text"
                                                    className="form-control sgnUp"
                                                    onChange={(e) => handleChangeEvent(e, "mobile")}
                                                />
                                            </div>
                                            <div className="form-check form-check-inline rd">
                                                <input
                                                    required
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="Male"
                                                    name="gender"
                                                    value="Male"
                                                    onChange={(e) => handleChangeEvent(e, "gender")}
                                                />
                                                <label className="form-check-label" htmlFor="Male">
                                                    Male
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline rd">
                                                <input
                                                    required
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="Female"
                                                    name="gender"
                                                    value="Female"
                                                    onChange={(e) => handleChangeEvent(e, "gender")}
                                                />
                                                <label className="form-check-label" htmlFor="Female">
                                                    Female
                                                </label>
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="password">Password:</label>
                                                <input
                                                    required
                                                    id="password"
                                                    type="password"
                                                    className="form-control sgnUp"
                                                    onChange={(e) => handleChangeEvent(e, "password")}
                                                />
                                            </div>
                                            <div className="form-group2">
                                                <input
                                                    required
                                                    type="submit"
                                                    value="submit"
                                                    className="btn-primary btnn form-submit sub-btn sgnUp"
                                                />
                                            </div>
                                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                                            <div>
                                                <small className="form-text text-muted link-text">
                                                    Already a User?
                                                </small>
                                                <span className="signuptext">
                                                    <a href="/#" onClick={getToSignIn}>
                                                        Sign - In
                                                    </a>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
