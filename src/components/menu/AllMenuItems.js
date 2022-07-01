import React, { Component } from "react";
import MenuItem from "./MenuItem";
// import MenuItem from "./MenuItem";

export default class AllMenuItems extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            // item_menus: [],
            // item_names: [],
            // item_descriptions: [],
            data: {
                item_names: [],
                item_descriptions: [],
                item_img_links: [],
                item_scan_links: [],
                response: [],
            },
        };
        this.getItems();
        this.listItems();
    }

    // address to backend server (fetch data from DB)
    // backend_server_items = "http://localhost:5000/allitems";
    // backend_server_menus = "http://localhost:5000/allmenus";
    // backend_server_item_names = "http://localhost:5000/allitems_detailed";
    backend_server =
        "https://hearsay-unofficial-backend.herokuapp.com/allitems_detailed";

    getItems() {
        fetch(this.backend_server)
            .then((response) => response.json())
            .then((data) => this.setState({ data: { response: data } }))
            .catch((error) => {
                console.log("AllMenuItems getItems() fetch error", error);
            });

        //     fetch(this.backend_server_item_names)
        //         .then((response) => response.json())
        //         .then((data) => this.setState({ item_names: data }))
        //         .catch((error) => {
        //             console.log("AllMenuItems getItems() names fetch error", error);
        //         });

        //     fetch(this.backend_server_item_names)
        //         .then((response) => response.json())
        //         .then((data) => this.setState({ item_names: data }))
        //         .catch((error) => {
        //             console.log("AllMenuItems getItems() descriptions fetch error", error);
        //         });
        // fetch(this.backend_server_items)
        //     .then((response) => response.json())
        //     .then((data) => this.setState({ data }))
        //     .catch((error) => {
        //         console.log("getItems() items fetch error", error);
        //     });
        // fetch(this.backend_server_menus)
        //     .then((response) => response.json())
        //     .then((data) => this.setState({ menus: data }))
        //     .catch((error) => {
        //         console.log("getItems() menus fetch error", error);
        //     });
        // # response{
        // #   [0][menusID],
        // #   [1][menusID][itemsID],
        // # }
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
        // if (this.state.isLoading) {
        //     return <h3 className="loading">Loading…</h3>;
        // }
        return <div>{this.listItems()}</div>;
    }
}
