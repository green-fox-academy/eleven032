import React from 'react';
import { Link } from "react-router-dom";

function Side() {
    return (
        <div className="side">
            <Link to='/submit' className='link'>
                <div className="submit">SUBMIT A NEW POST</div>
            </Link>
        </div>
    )
}

export default Side;