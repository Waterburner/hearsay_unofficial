import React, { Component, useState, useEffect } from "react";

// localhost:5000/

// list of all menus
//  /allmenus

// show all items (with description and pictures) from certain menu
//  /menu_id=<id>

// show all items from all menus
//  /allitems

// state:
//

// const [data, setData]  = useState([{}])

// useEffect(() => {
//     fetch("/")
// })

//================================================

// show cetrain item only
//  /item_id=<id>+<menu_id>
// ex: /item_id=2+1

export default class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            // item_name: "",
            // item_description: "",
            // item_img_link: "",
            // item_scan_link: "",
            menuItemClass: "",
        };
    }

    // backend_server = "http://localhost:5000/item_id";

    // getItem(menu_id, item_id) {
    //     fetch(`${this.backend_server}=${item_id}+${menu_id}`)
    //         .then((response) => response.json())
    //         .then((data) => this.setState({ data }))
    //         .catch((error) => {
    //             console.log("getItem() MenuItem.js fetch error", error);
    //         });
    // }

    listItem() {
        return (
            <div>
                <h1>{this.state.data}</h1>
            </div>
        );
    }

    render() {
        const item_name = this.props.item_name;
        const item_des = this.props.item_description;
        const item_img_link = this.props.item_img_link;
        const item_scan_link = this.props.item_scan_link;

        return (
            <div className="menu-item-wrapper">
                <div className="menu-item">
                    <div>
                        <div className="menu-item-title-wrapper">
                            <h3 className="menu-item-title">{item_name}</h3>
                        </div>
                        <div className="menu-item-description-wrapper">
                            <div className="menu-item-description">
                                {item_des}
                            </div>
                        </div>
                    </div>

                    <div className="menu-image-wrapper">
                        <div className="menu-image">
                            <div className="image">
                                <img href={item_img_link}></img>
                            </div>
                            <div className="scan">
                                <div className="sketchfab-embed-wrapper">
                                    {item_scan_link}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
