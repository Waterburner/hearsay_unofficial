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
            .catch((error) => {
                console.log("getItems() fetch error", error);
            });
        // response
        // template: [0- menus_name, 1- menu-items, 1-0 - items from menus 0-0, 1-1 from 0-0 … 1-3 from 0-3…]
        // [
        //     [
        //         ["dinner menu"],
        //         ["brunch menu"],
        //         ["drink menu"],
        //         ["dessert menu"],
        //         ["appetizers menu"],
        //     ],
        //     [
        //         [
        //             [
        //                 1,
        //                 "Crab crusted redfish",
        //                 "Pan seared redfish, topped with crab crust and then backed to perfection. Served on the bed of garlic green beans with red pepper sauce and drizzled with lemon butter",
        //                 "https://lh4.googleusercontent.com/TPg9FGHlToAD-JsFkUxQvvPxSwZ6hcEwhjFvq7isgix1fUeVqVKJoxnpu0W3BWqIGQdy7CKVGVkoIj3XsOuV=w1264-h856",
        //                 null,
        //                 1,
        //             ],
        //              …
        //             [
        //                 16,
        //                 "Shrimp and Sausage Fettuccini",
        //                 "saut\u00e9ed shrimp, jalape\u00f1o sausage, cherry tomato, Creole Sauce",
        //                 "dinner menu link10",
        //                 null,
        //                 1,
        //             ],
        //         ],
        //         [
        //             [
        //                 1,
        //                 "Egg benedict",
        //                 "Poached eggs served on the bed of muffin and proscuto, topped with hollanday sauce.",
        //                 "https://test.com/sldkfj",
        //                 null,
        //                 2,
        //             ],
        //             [
        //                 2,
        //                 "Texas Omlette",
        //                 "Omlette with smoked brisket, tomatoes, topped with avocado, pico, jallapenio",
        //                 "https://testing.com/lk",
        //                 null,
        //                 2,
        //             ],
        //         ],
        //         [
        //             [
        //                 1,
        //                 "Whitney",
        //                 "Respberry vodka, blackberry liquor cassis, muddle blackberry and champagne",
        //                 "https://blah.com",
        //                 null,
        //                 3,
        //             ],
        //             [
        //                 2,
        //                 "TestItem3",
        //                 "Destined for deletion as well",
        //                 "no-link",
        //                 null,
        //                 3,
        //             ],
        //         ],
        //         [
        //             [
        //                 1,
        //                 "Bread pudding",
        //                 "Bread pudding topped with caramel and acompanied with vanilla icecream",
        //                 "https://test.com/sdkfsdlkfjsdlfkj",
        //                 null,
        //                 4,
        //             ],
        //             [
        //                 2,
        //                 "TestItem4?",
        //                 "Another item destined for deletion as well",
        //                 "no-link",
        //                 null,
        //                 4,
        //             ],
        //         ],
        //         [],
        //     ],
        // ];
    }

    listItems() {
        console.log(this.state.data);
        return this.state.data.map((data) => {
            return (
                <div>
                    <div className="choosen-menu-wrapper">
                        <div className="choosen-menu">
                            <div className="choosen-menu-title-wrapper">
                                <h2 className="choosen-menu-title">
                                    {/* {data} */}
                                    MENU-TEST
                                </h2>
                            </div>
                        </div>
                        {/* ====================================== call component "MenuItem" ========================================== */}

                        <div className="menu-item-wrapper">
                            <div className="menu-item">
                                <div>
                                    <div className="menu-item-title-wrapper">
                                        <h3 className="menu-item-title"></h3>
                                    </div>
                                    <div className="menu-item-description-wrapper">
                                        <div className="menu-item-description">
                                            Pan seared redfish …
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ====================================== END OF call component "MenuItem" ========================================== */}
                        </div>
                    </div>
                </div>
            );
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
