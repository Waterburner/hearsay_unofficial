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

export default class Menus extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            menus: [],
            isLoading: true,
        };

        this.getMenus = this.getMenus.bind(this);
    }

    backend_server = "http://localhost:5000/allmenus";

    getMenus(backend_server) {
        fetch()
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    render() {
        this.getMenus(this.backend_server);
        return <div>getMenus</div>;
    }
}
