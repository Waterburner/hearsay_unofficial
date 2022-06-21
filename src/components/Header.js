import React, { Component } from "react";

import headerLogo from "../../static/assets/hearsay_logo.png";

import { NavLink } from "react-router-dom";

export default function () {
    // temp
    const updatedDate = "January 2022";
    const burgerStyle = { fontSize: "2rem", textAlign: "center" };
    const centerStyle = { textAlign: "center" };

    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="title">
                    <h1 style={centerStyle}>Unofficial training guide</h1>
                    <p className="title-date" style={centerStyle}>
                        last updated: {updatedDate};
                    </p>
                </div>

                <div className="burger" style={burgerStyle}>
                    <div className="navigation">navigation</div>
                    {/* burger-menu show: invisible */}
                    <div className="burger-menu">
                        <div className="menu-navigation">
                            <div className="menu-item-wrapper">
                                <h3 className="menu-item-navigation-choice">
                                    navigation
                                </h3>
                            </div>

                            <div className="menu-item-wrapper">
                                <NavLink to="/">
                                    <h3 className="menu-item">home</h3>
                                </NavLink>
                            </div>

                            <div className="menu-item-wrapper">
                                <NavLink to="/menus">
                                    <h3 className="menu-item">menus</h3>
                                </NavLink>
                            </div>

                            <div className="menu-item-wrapper">
                                <NavLink to="/guest-approach">
                                    <h3 className="menu-item">
                                        guest upproach
                                    </h3>
                                </NavLink>
                            </div>

                            <div className="menu-item-wrapper">
                                <NavLink to="/orders-in-special">
                                    <h3 className="menu-item">
                                        putting orders in, special requests
                                    </h3>
                                </NavLink>
                            </div>

                            <div className="menu-item-wrapper">
                                <NavLink to="/sideworks">
                                    <h3 className="menu-item">sideworks</h3>
                                </NavLink>
                            </div>

                            <div className="menu-item-wrapper">
                                <NavLink to="/credits">
                                    <h3 className="menu-item">credits</h3>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to="/">
                    <div className="header-logo">
                        <img src={headerLogo} alt="" className="logo" />
                        {/* <div className="header-logo-img"></div> */}
                    </div>
                </NavLink>
            </div>
        </div>
    );
}
