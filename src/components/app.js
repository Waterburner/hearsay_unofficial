import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./homepage/Homepage";
import Menus from "./menu/Menus.js";
import AllMenuItems from "./menu/Allmenuitems";
import ChoosenMenu from "./menu/ChoosenMenu";
import Credits from "./credits";
import NoMatch from "./NoMatch";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <div className="app-wrapper">
                        <Header />

                        <Switch>
                            <Route exact path="/" component={Homepage} />

                            <Route path="/menus" component={Menus} />

                            <Route
                                path="/all_menu_items"
                                component={AllMenuItems}
                            />

                            <Route
                                exact
                                path="/menu/:slug"
                                component={ChoosenMenu}
                            />

                            <Route path="/credits" component={Credits} />

                            <Route component={NoMatch} />
                        </Switch>

                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}
