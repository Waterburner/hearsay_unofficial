import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default function () {
    return (
        <div className="menus-wrapper">
            <div className="menus">
                <h2 className="menus-head-wrapper">
                    <div className="menus-head">Menus</div>
                </h2>

                <div className="menu-selection-wrapper">
                    <ul className="menu-selection">
                        <li>
                            <NavLink to="dinner">Dinner</NavLink>
                        </li>
                        <li>
                            <NavLink to="brunch">Brunch</NavLink>
                        </li>
                        <li>
                            <NavLink to="vegeterian">Vegeterian</NavLink>
                        </li>
                        <li>
                            <NavLink to="coctails">Coctails</NavLink>
                        </li>
                        <li>
                            <NavLink to="happyhour">Happy Hour</NavLink>
                        </li>
                        <li>
                            <NavLink to="everything">all of it :]</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
