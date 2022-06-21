import React from "react";

import { NavLink } from "react-router-dom";

export default function () {
    return (
        <div className="credits-wrapper">
            <div className="credits">
                <h2>UNOFFICIAL TRAINING GUIDE</h2>
                <p>
                    Created by Oleh Kovelskyi as "best practices" and
                    recommendations.
                    <br />
                    <br />
                    <br />
                    All rights reserved.
                    <br />
                    <br />
                    <br />
                    <NavLink to="/">
                        <h3 className="menu-item">Homepage</h3>
                    </NavLink>
                </p>
            </div>
        </div>
    );
}
