import React from "react";
import { Link } from "react-router-dom";

const Navigate = ()=>{
    return(
        <div className="Navigation">
        <nav>
          <Link to="/learning">Learning</Link>
          <Link to="/account">Account</Link>
          <Link to="/play">Play</Link>
          <Link to="/news">News</Link>
          <Link to="/about">About us</Link>
        </nav>
      </div>
    )
}

export default Navigate