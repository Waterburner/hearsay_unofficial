import React, { Component } from "react";
import MenuItem from "./MenuItem";

export default class AllMenuItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            data: [],
            menus: [],
        };
    }

    // address to backend server (fetch data from DB)
    backend_server_items = "http://localhost:5000/allitems";
    backend_server_menus = "http://localhost:5000/allmenus";

    getItems() {
        fetch(this.backend_server_items)
            .then((response) => response.json())
            .then((data) => this.setState({ data }))
            .catch((error) => {
                console.log("getItems() items fetch error", error);
            });

        fetch(this.backend_server_menus)
            .then((response) => response.json())
            .then((data) => this.setState({ menus: data }))
            .catch((error) => {
                console.log("getItems() menus fetch error", error);
            });
        // # response{
        // #   [0][menusID],
        // #   [1][menusID][itemsID],
        // # }
    }

    listItems() {
        // list menus
        return this.state.menus.map((menu) => {
            return menu.map((item, index) => {
                return (
                    <div className="menu-item">
                        <div className="menus-wrapper">
                            <div className="menus">
                                <h2 className="menus-head-wrapper">
                                    <div className="menus-head">{item}</div>
                                </h2>

                                <div className="menu-selection-wrapper">
                                    <ul className="menu-selection"></ul>
                                </div>
                            </div>
                        </div>
                        {this.state.data.map((data) => {
                            return data[index].map((data) => {
                                // return <p>{data}</p>; returns menu item ids from current menu
                                // TODO: call component MenuItem with this props of returning item_id=data and menu_id=index

                                <MenuItem menu_id={index} item_id={data} />;
                            });
                        })}
                    </div>
                );
            });
        });
    }

    componentDidMount() {
        this.getItems();
    }

    render() {
        console.log(this.state.data);
        // if (this.state.isLoading) {
        //     return <h3 className="loading">Loading…</h3>;
        // }

        return (
            <div>
                {this.listItems()}
                <MenuItem />
            </div>
        );
    }
}
