import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="Footer">
            <Link className="Footer_Logo" to="/"><h2>Свяжитесь с нами</h2></Link>
            <div className="Footer_Links">
                <Link to=""><p></p>stepaosnova1@gmail.com</Link>
                <Link to="https://instagram.com/olvaesss"><p></p>instagram/olvaesss</Link>
                <Link to="https://t.me/olvaesss"><p></p>t.me/olvaesss</Link>
            </div>
            <Link to="/" className="Logo"><h1>ChessTraining</h1></Link>
        </div>
    )
}