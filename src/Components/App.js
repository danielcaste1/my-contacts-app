import React, { Fragment, useContext } from "react";
import { AppProvider } from "../Context/AppContext";
import { AppUI } from "./AppUI";

function App(){
    return  (
        <AppProvider>
            <AppUI></AppUI>
        </AppProvider>
    )
}


export { App }