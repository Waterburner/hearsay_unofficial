import React, { Component } from "react";
import MenuNavigation from "./MenuNavigation";

export default function () {
    return (
        <div className="homepage">
            <div className="homepage-wrapper">
                <div className="content">
                    <div className="content-wrapper">
                        <p className="greeting">
                            Welcome to unofficial training guide <br />
                            for <span>Hearsay on the Strand!</span> <br />
                            The guide is made by one of the servers after
                            realization that each person isn't trained the same
                            way and doesn't have many resourses for learning.
                            <br />
                            The guide is unofficial and not approved by any
                            employees. This is really just personal
                            recommendation after gaining experience. <br />
                            Hopefully you'll find it useful!
                        </p>
                        <MenuNavigation />
                    </div>
                </div>
            </div>
        </div>
    );
}
