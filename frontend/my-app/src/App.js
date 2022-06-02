import React from 'react';
import Webpages from './webpages';
import Title from './webpages/title';
import {
  BrowserRouter,
  Routes,
    Route,
    useRoutes,
} from "react-router-dom";
function App() {
  return (
     <BrowserRouter>
       <Title/>
      <Webpages />
     </BrowserRouter>
  );
}
export default App;