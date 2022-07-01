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

// NEEDED DATA:
// menu_id
// menu_name
// item_id

export default class ChoosenMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            menu_id: this.props.match.params.slug,
            data: { response: [] },
        };

        this.getItems();
    }

    // /menu_id=<id>
    // change id=1 to id={menu_id}

    getItems() {
        fetch(
            `https://hearsay-unofficial-backend.herokuapp.com/menu_id=${this.props.match.params.slug}`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ data: { response: data } }))
            .catch((error) => {
                console.log("ChoosenMenu getItems() fetch error", error);
            });
    }

    displayMenuName() {
        let menu_list = [
            "not a",
            "Dinner",
            "Brunch",
            "Drink",
            "Dessert",
            "Appetaizer",
        ];
        let menu_index = this.state.menu_id;

        if (this.state.menu_id.length > 0) {
            return (
                <div className="choosen-menu-title-wrapper">
                    <h2 className="choosen-menu-title">
                        {menu_list[menu_index]} menu
                    </h2>
                </div>
            );
        }
    }

    listItems() {
        const { data } = this.state;
        return (
            data.response.length > 0 &&
            data.response[0].map((item_name, count) => {
                return (
                    <MenuItem
                        item_name={item_name}
                        item_description={this.state.data.response[1][count]}
                        item_img_link={this.state.data.response[2][count]}
                        key={count}
                    />
                );
            })
        );
    }
    render() {
        return (
            <div className="choosen-menu-wrapper">
                <div className="choosen-menu">
                    {this.displayMenuName()}

                    {this.listItems()}
                </div>
            </div>
        );
    }
}
