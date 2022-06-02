import React, { Component } from "react";
// import MenuItem from "./MenuItem";

export default class AllMenuItems extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            data: [],
            menus: [],
        };
        this.getItems();
    }

    // address to backend server (fetch data from DB)
    // backend_server_items = "http://localhost:5000/allitems";
    // backend_server_menus = "http://localhost:5000/allmenus";
    backend_server = "http://localhost:5000/allitems_detailed";

    getItems() {
        fetch(this.backend_server)
            .then((response) => response.json())
            .then((data) => this.setState({ data: data }))
            .catch((error) => {
                console.log("AllMenuItems getItems() fetch error", error);
            });
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
        const data = this.state.data;
        let item_names = [];
        item_names.push(this.state.data[0]);
        let item_description = this.state.data[1];
        let item_img_link = this.state.data[2];
        let item_scan_link = this.state.data[3];
        let item_quantity = 0;

        return item_names.map((item, count) => {
            return (
                <div>
                    <h3>{count}</h3>
                    <p>{item}</p>
                </div>
            );
        });
    }

    render() {
        // if (this.state.isLoading) {
        //     return <h3 className="loading">Loading…</h3>;
        // }

        return <div>{this.listItems()}</div>;
    }
}
