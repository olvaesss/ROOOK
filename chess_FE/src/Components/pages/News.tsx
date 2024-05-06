import React from "react";
import New from "./PageComponents/New";
import Footer from "../Footer";

const News = () => {
    return (
        <div>
            <h2>Новости</h2>
            <img src="/images/load.gif" alt="Загрузка данных..." className="loading" />
            <New />
            <Footer />
        </div>
    )
}

export default News