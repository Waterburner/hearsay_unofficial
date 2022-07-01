import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menus extends Component {
    constructor() {
        super();

        this.state = {
            menus: [],
            isLoading: false,
        };
        this.getMenus();
    }
    // address to backend server (fetch data from DB)
    backend_server_menus =
        "https://hearsay-unofficial-backend.herokuapp.com/allmenus";

    getMenus() {
        fetch(this.backend_server_menus)
            .then((response) => response.json())
            .then((data) => this.setState({ menus: data }))
            .catch((error) => {
                console.log("getMenus() fetch error", error);
            });
        // response
        // template: [menus array]
    }

    // auto generated menu list from DB
    listMenus() {
        console.log(this.state);
        return (
            this.state.menus.length > 0 &&
            this.state.menus[0].map((menu, index) => {
                return menu.map((item) => {
                    var navLinkTarget = this.state.menus[1][index];
                    navLinkTarget = "/menu/" + navLinkTarget;

                    return (
                        <div className="menu-item-wrapper">
                            <NavLink to={navLinkTarget}>{item}</NavLink>
                        </div>
                    );
                });
            })
        );
    }

    render() {
        if (this.state.isLoading == true) {
            return <li>still loading…</li>;
        }

        return (
            <div className="menus-wrapper">
                <div className="menu-navigation">
                    <h3 className="menus-head">select a menu</h3>

                    {this.listMenus()}
                </div>
            </div>
        );

        // return (
        //     <div className="menus-wrapper">
        //         <div className="menus">
        //             <h2 className="menus-head-wrapper">
        //                 <div className="menus-head">Menus</div>
        //             </h2>

        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/drink_menu">Drinks</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/menu/4">Appetizers</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/menu/1">Dinner</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/menu/2">Brunch</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/menu/3">Desserts</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/all_menu_items">
        //                             All dishes
        //                         </NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}
