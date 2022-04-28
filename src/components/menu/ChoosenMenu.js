import React, { Component } from "react";

import MenuItem from "./MenuItem";

// show all items (with description and pictures) from certain menu
//  /menu_id=<id>

//
//     ["Brunch menu"],
//     [
//         1,
//         "Egg benedict",
//         "Poached eggs served on the bed of muffin and proscuto, topped with hollanday sauce.",
//         "https://test.com/sldkfj",
//         null,
//         2,
//     ],
//     [
//         2,
//         "Texas Omlette",
//         "Omlette with smoked brisket, tomatoes, topped with avocado, pico, jallapenio",
//         "https://testing.com/lk",
//         null,
//         2,
//     ],
//

import React, { Component } from "react";

// NEEDED DATA:
// menu_id
// menu_name
// item_id

export default class ChoosenMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            menu_id: null,
            menu_name: "",
            item_id: null,
        };
    }

    render() {
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
}
