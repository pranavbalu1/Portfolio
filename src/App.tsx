import React from "react";
import Dashboard from "./screens/dashboard";    
import Navbar from "./screens/navbar";

function App() {
    return (
        <> 

        <div className="z-[-1] fixed w-[100vw] h-[100vh] bg-[url('./components/images/grainy-background.png')] " >
            
        </div>
        <Dashboard  />
        <Navbar />
        </>
    );
}

export default App;