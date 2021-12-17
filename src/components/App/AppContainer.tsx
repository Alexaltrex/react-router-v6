import {HashRouter} from "react-router-dom";
import React from "react";
import {App} from "./App";

export const AppContainer = () => {
    return (
        <React.StrictMode>
            <HashRouter>
                <App/>
            </HashRouter>
        </React.StrictMode>

    )
}