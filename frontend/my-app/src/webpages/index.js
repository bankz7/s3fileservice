import React from 'react';
import {
  Routes,
  Switch,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import UploadPage from './upload';
import DownloadPage from './download';
import './css/page.css';
const Webpages = () => {
    return(
        <div className="content">
            <Routes>
                <Route exact path="/" element={<Navigate replace to="/upload" />} />
                <Route exact path="/upload" element= {<UploadPage/>} />
                <Route exact path="/download" element = {<DownloadPage/>} />
            </Routes>
        </div>
    );
};
export default Webpages;