import React, { Component } from "react";

import MenuItem from "./MenuItem";

export default function () {
    return (
        <div className="choosen-menu-wrapper">
            <div className="choosen-menu">
                <div className="choosen-menu-title-wrapper">
                    <h2 className="choosen-menu-title">Dinner menu</h2>
                </div>

                <MenuItem />
            </div>
        </div>
    );
}
