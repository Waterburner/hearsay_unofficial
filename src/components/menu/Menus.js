// import React, { Component } from "react";

// import { NavLink } from "react-router-dom";

// const getMenus = () => {
//     fetch("http://localhost:5000")
//         .then((response) => response.json())
//         .then((data) => console.log(data));
// };

// export default function () {
//     getMenus();
//     return (
//         <div className="menus-wrapper">
//             <div className="menus">
//                 <h2 className="menus-head-wrapper">
//                     <div className="menus-head">Menus</div>
//                 </h2>

//                 <div className="menu-selection-wrapper">
//                     <ul className="menu-selection">
//                         <li>
//                             <NavLink to="dinner">Dinner</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="brunch">Brunch</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="vegeterian">Vegeterian</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="coctails">Coctails</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="happyhour">Happy Hour</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="everything">all of it :]</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menus extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            menus: [],
            isLoading: true,
        };
        this.getMenus();
    }

    backend_server = "http://localhost:5000/allmenus";

    getMenus() {
        fetch(this.backend_server)
            .then((response) => response.json())
            .then((data) => this.setState({ data: data }));
        // response
        // 0 [1, "Dinner menu", "dinner_menu", "https://drive.google.com/drive/u/1/folders/1PPo7mxtq50rgDKTVTg3gtPWYFHzyPr4y", "https://imgbox.com/g/MB5BuqDEI2", null] (6)
        // 1 [2, "Brunch menu", "brunch_menu", null, null, null] (6)
        // 2 [3, "Drink menu", "drink_menu", null, null, null] (6)
        // 3 [4, "Dessert menu", "dessert_menu", null, null, null] (6)
        // 4 [5, "Appetizers menu", "appetizers_menu", null, null, null] (6)
    }

    listMenus() {
        return this.state.data.map((data) => {
            return (
                <li>
                    <NavLink to={data[2]}>{data[1]}</NavLink>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="menus-wrapper">
                <div className="menus">
                    <h2 className="menus-head-wrapper">
                        <div className="menus-head">Menus</div>
                    </h2>

                    <div className="menu-selection-wrapper">
                        <ul className="menu-selection">
                            {this.listMenus()}
                            <li>all dishes</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
