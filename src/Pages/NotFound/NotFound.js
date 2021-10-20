import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/error/2451352-ai.png'
const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" />
            <br /><br />
            <Link to="/">
                <button className="btn btn-warning">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;