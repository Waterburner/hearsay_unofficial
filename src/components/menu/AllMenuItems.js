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

        this.listItems = this.listItems.bind(this);
    }

    // address to backend server (fetch data from DB)
    backend_server = "http://localhost:5000/allitems";

    getItems() {
        fetch(this.backend_server)
            .then((response) => response.json())
            .then((data) => this.setState({ data: data }))
            .then(console.log(this.state.data))
            .catch((error) => {
                console.log("getItems() fetch error", error);
            });
        // # response{
        // #   [0][menusID],
        // #   [1][menusID][itemsID],
        // #   [2][menu_name]
        // # }
    }

    listItems() {
        console.log(this.state.data);
        return this.state.data.map((item) => {
            return <p>{item}</p>;
        });
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
