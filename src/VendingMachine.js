import React, { useState } from "react";
import { Link } from "react-router-dom";



function VendingMachine() {
    return (
    <nav className="NavBar">
        <h1>Vending Machine</h1>
        <h3>Pick an Item!</h3>
        <br/>
        <Link to="/snack/chips">
            Chips
        </Link>
        <br/>
        <Link to="/snack/pickle">
            Pickle
        </Link>
        <br/>
        <Link to="/snack/ice-cream">
            Ice Cream
        </Link>
        <br/>
    </nav>
    );
}

export default VendingMachine;