import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Header from "../../Shared/Header/Header";
import Appointments from "../Appointments/Appointments";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Review from "../Review/Review";
import Services from "../Services/Services";
import "./Dashboard.css";

const Dashboard = () => {
    // const [admin, setAdmin] = useState(false);
    let { path, url } = useRouteMatch();
    const { user, handleSignOut } = useAuth();
    //<----------------- Load Admin Data From Database --------------->
    // useEffect(() => {
    //     fetch(`https://serene-coast-79100.herokuapp.com/user/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => setAdmin(data.admin));
    // }, [user.email]);

    const myFunction = () => {
        const toggleButton = document.getElementById("toogleDiv");
        if (toggleButton.style.display === "none") {
            toggleButton.style.display = "block";
        } else {
            toggleButton.style.display = "none";
        }
    };

    return (
        <>
            <button
                onClick={myFunction}
                className="border-0 d-flex toggle-container"
            >
                <i className="fas fa-bars btn btn-danger toggle-button mt-2"></i>
            </button>
            <div className="row mx-auto">
                <div
                    className="col-md-12 col-lg-2 col-sm-12 px-0"
                    id="toogleDiv"
                >
                    <div className="card leftCard h-100 w-100 border-0 px-3">
                        <div className="d-flex flex-row align-items-center justify-content-center mt-4">
                            {/* <img
                                className="rounded-circle h-50 text-light border border-danger"
                                src={user?.photoURL}
                                alt="User-Profile"
                            /> */}
                            <span className="text-light">
                                {user?.displayName}
                            </span>
                        </div>
                        <hr className="text-light" />
                        <div className="d-flex flex-column align-items-center me-3">
                            <Link
                                to={`${url}`}
                                className="w-100 border-0 rounded-3 btn subMenu"
                            >
                                <button className="w-100 border-0 rounded-3 btn text-light">
                                    Home
                                </button>
                            </Link>
                            <Link
                                        to={`${url}/appointments`}
                                        className="w-100 border-0 rounded-3 btn subMenu"
                                    >
                                        <button className="w-100 border-0 rounded-3 btn text-light">
                                            Appointments
                                        </button>
                                    </Link>
                            <Link
                                to={`${url}/review`}
                                className="w-100 border-0 rounded-3 btn subMenu"
                            >
                                <button className="w-100 border-0 rounded-3 btn text-light">
                                    Review
                                </button>
                            </Link>
                            {/* {admin && ( */}
                                <>
                                    <Link
                                        to={`${url}/services`}
                                        className="w-100 border-0 rounded-3 btn subMenu"
                                    >
                                        <button className="w-100 border-0 rounded-3 btn text-light">
                                            Services
                                        </button>
                                    </Link>
                                    <Link
                                        to={`${url}/makeAdmin`}
                                        className="w-100 border-0 rounded-3 btn subMenu"
                                    >
                                        <button className="w-100 border-0 rounded-3 btn text-light">
                                            Make Admin
                                        </button>
                                    </Link>
                                </>
                            {/* )} */}
                            <Link
                                to="/"
                                className="w-100"
                            >
                                <button
                                    className="w-100 border-0 rounded-3 btn text-light"
                                    style={{backgroundColor: "rgb(31, 228, 218)"}}
                                    onClick={handleSignOut}
                                >
                                    Logout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-10 col-sm-12 px-0">
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome />
                        </Route>
                        <Route path={`${path}/appointments`}>
                            <Appointments />
                        </Route>
                        <Route path={`${path}/services`}>
                            <Services />
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review />
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
