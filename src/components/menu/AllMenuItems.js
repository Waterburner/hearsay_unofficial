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
    backend_server = "http://localhost:5000/allitems_detailed";

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
        this.setState({
            data: { item_names: this.state.data.response },
        });

        const data = this.state.data;
        let item_names = [];
        item_names.push(this.state.data.response);
        let item_description = this.state.data[1];
        let item_img_link = this.state.data[2];
        let item_scan_link = this.state.data[3];
        let item_quantity = 0;
        console.log(this.state.data.item_names);
        // return <p>{this.state.data.item_names}</p>;
        // return item_names.map((item, count) => {
        //     return (
        //         <div>
        //             <h3>{count}</h3>
        //             <p>{item}</p>
        //         </div>
        //     );
        // });
    }

    render() {
        // if (this.state.isLoading) {
        //     return <h3 className="loading">Loading…</h3>;
        // }
        return (
            <div>
                <MenuItem
                    item_name="test"
                    item_description="haha"
                    item_img_link=""
                    item_scan_link=""
                />
            </div>
        );
    }
}
