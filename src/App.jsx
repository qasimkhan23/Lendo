import { useState } from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import RightPanel from "./components/rightPanel/RightPanel";

function App() {
   return (
      <>
         <div className="container">
            <div className="card">
               <Sidebar />
               <RightPanel />
            </div>
         </div>
      </>
   );
}

export default App;
