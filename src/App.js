import React from 'react'
import "../src/Styles/App.css";
import Content from '../src/Pages/Content'
import {ListNft} from './components/ListNft'
import {Tasks} from "./components/Tasks"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




const App = () => {

  return (
    <div className="section_container">
      <Router>
        <Routes>
          <Route path="/" element={<Tasks />} exact />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/nftlisting" element={<ListNft />} />
           <Route path="/mint" element={<Content />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
