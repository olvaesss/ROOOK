import React from "react";
import { Link } from "react-router-dom";

const Navigate = ()=>{
    return(
        <div className="Navigation">
        <nav>
          <Link to="/learning">Обучение</Link>
          <Link to="/account">Аккаунт</Link>
          <Link to="/play">Играть</Link>
          <Link to="/news">Новости</Link>
          <Link to="/about">О нас</Link>
        </nav>
      </div>
    )
}

export default Navigate