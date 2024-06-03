import React from "react";
import { API } from "../../axios";
import ChessPage from "../game/pages/ChessPage";
import Layout from "../game/components/Layout";
import StoreContext from "../game/context";
import Store from '../game/store'


const store = new Store
const RoomID = () => {

    return (
        <div className="Room">
            <StoreContext.Provider value={store}>
                <ChessPage />
            </StoreContext.Provider>
        </div>
    )
}

export default RoomID