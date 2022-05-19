import React, { Component } from "react";
// import MenuItem from "./MenuItem";

export default class AllMenuItems extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            data: [],
        };
        this.getItems();
    }

    // address to backend server (fetch data from DB)
    backend_server_items = "http://localhost:5000/allitems";
    backend_server_menus = "http://localhost:5000/allmenus";

    getItems() {
        fetch(this.backend_server_items)
            .then((response) => response.json())
            .then((data) => this.setState({ data: data }))
            .then(console.log("current state", this.state))
            .catch((error) => {
                console.log("getItems() items fetch error", error);
            });
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
        console.log(this.state);
        // return this.state.menus.map((menu) => {
        //     return <p>{menu}</p>;
        // });
    }

    render() {
        // if (this.state.isLoading) {
        //     return <h3 className="loading">Loading…</h3>;
        // }

        return (
            <div>
                <div>{this.listItems()}</div>
            </div>
        );
    }
}
