import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

const Navbar = () => {
return(
        <nav>
            <div className="nav-wrapper">
              <ul id="nav">
                <li><a href="/upload">Upload</a></li>
                <li><a href="/download">Download</a></li>
              </ul>
            </div>
        </nav>
    );
}
export default Navbar;