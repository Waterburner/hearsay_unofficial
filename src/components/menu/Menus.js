import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menus extends Component {
    constructor() {
        super();

        this.state = {
            menus: [],
            isLoading: false,
        };
        // this.getMenus();
    }
    // address to backend server (fetch data from DB)
    // backend_server_menus = "http://localhost:5000/allmenus";

    // getMenus() {
    //     fetch(this.backend_server_menus)
    //         .then((response) => response.json())
    //         .then((data) => this.setState({ menus: data }))
    //         .catch((error) => {
    //             console.log("getMenus() fetch error", error);
    //         });
    //     // response
    //     // template: [menus array]
    // }

    // auto generated menu list from DB
    // listMenus() {
    //     return this.state.menus.map((menu) => {
    //         return menu.map((item) => {
    //             return (
    //                 <div className="menus-wrapper">
    //                     <div className="menus">
    //                         <h2 className="menus-head-wrapper">
    //                             <div className="menus-head">{item}</div>
    //                         </h2>

    //                         <div className="menu-selection-wrapper">
    //                             <ul className="menu-selection"></ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //             );
    //         });
    //     });
    // }

    render() {
        if (this.state.isLoading == true) {
            return <li>still loading…</li>;
        }

        return (
            <div className="menus-wrapper">
                <div className="menus">
                    <h2 className="menus-head-wrapper">
                        <div className="menus-head">Menus</div>
                    </h2>

                    <div className="menu-selection-wrapper">
                        <ul className="menu-selection">
                            <li>
                                <NavLink to="/drink_menu">Drinks</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-selection-wrapper">
                        <ul className="menu-selection">
                            <li>
                                <NavLink to="/appetizer_menu">
                                    Appetizers
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-selection-wrapper">
                        <ul className="menu-selection">
                            <li>
                                <NavLink to="/dinner_menu">Dinner</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-selection-wrapper">
                        <ul className="menu-selection">
                            <li>
                                <NavLink to="/brunch_menu">Brunch</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-selection-wrapper">
                        <ul className="menu-selection">
                            <li>
                                <NavLink to="/dessert_menu">Desserts</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-selection-wrapper">
                        <ul className="menu-selection">
                            <li>
                                <NavLink to="/all_menu_items">
                                    All dishes
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
