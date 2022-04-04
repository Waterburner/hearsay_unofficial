import React, { Component } from "react";

export default function () {
    return (
        <div className="menu-item-wrapper">
            <div className="menu-item">
                <div className="menu-item-title-wrapper">
                    <h3 className="menu-item-title">Crab crusted redfish</h3>
                </div>
                <div className="menu-item-description-wrapper">
                    <div className="menu-item-description">
                        Pan seared redfish topped with crab crust (jumbo-lumb
                        crab with bell peppers and a little bit of breading to
                        hold it together) and finished in the oven to the
                        perfection. Topped with creamy lemon butter sauce,
                        served on the bed of red pepper sauce and garlic
                        blistered green beans
                    </div>
                </div>

                <div className="menu-image-wrapper">
                    <div className="menu-image">
                        <div className="image">image goes here</div>
                        <div className="3d-img">
                            <div className="sketchfab-embed-wrapper">
                                {" "}
                                <iframe
                                    title="Chocolate muse"
                                    frameBorder="0"
                                    allowFullScreen
                                    mozallowfullscreen="true"
                                    webkitallowfullscreen="true"
                                    allow="autoplay; fullscreen; xr-spatial-tracking"
                                    // xr-spatial-tracking
                                    // execution-while-out-of-viewport
                                    // execution-while-not-rendered
                                    // web-share
                                    src="https://sketchfab.com/models/6dcb75bc1082474781af82c561919f16/embed"
                                >
                                    {" "}
                                </iframe>{" "}
                                <p>
                                    {" "}
                                    <a
                                        href="https://sketchfab.com/3d-models/chocolate-muse-6dcb75bc1082474781af82c561919f16?utm_medium=embed&utm_campaign=share-popup&utm_content=6dcb75bc1082474781af82c561919f16"
                                        target="_blank"
                                    >
                                        {" "}
                                        Chocolate muse{" "}
                                    </a>{" "}
                                    by{" "}
                                    <a
                                        href="https://sketchfab.com/oleg.kovelsky?utm_medium=embed&utm_campaign=share-popup&utm_content=6dcb75bc1082474781af82c561919f16"
                                        target="_blank"
                                    >
                                        {" "}
                                        oleg.kovelsky{" "}
                                    </a>{" "}
                                    on{" "}
                                    <a
                                        href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6dcb75bc1082474781af82c561919f16"
                                        target="_blank"
                                    >
                                        Sketchfab
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}