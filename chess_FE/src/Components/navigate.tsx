import React from "react";
import { Link } from "react-router-dom";

const Navigate = ()=>{
    return(
        <div className="Navigation">
        <nav>
                <Link to="/Login"><button>Login</button></Link>
                <Link to="/Register"><button>Register</button></Link>
                <Link to="/Lobby"><button>Lobby</button></Link>
                <Link to="/"><button>Main</button></Link>
        </nav>
      </div>
    )
}

export default Navigate