import React from 'react';
import {Link} from "react-router-dom";

export default function Home()  {
    return (
        <div>
            <h1>This is the Homepage.</h1>
            <Link to = "/About">Go to About page.</Link><br /><br />
            <Link to = "/Contact">Go to Contact page.</Link>

        </div>
    );
};