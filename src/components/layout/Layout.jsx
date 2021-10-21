import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
// import Employees from './pages/Employees';

const Layout = ({children}) => {
    return (  
        <>
            <Sidebar/>
            <div className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ps ps--active-y">
                <Navbar/>
                <div className="container-fluid py-4">   
                    {children}
                </div>
               {/*  <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div className="ps__thumb-x" tabindex="0" style={{left: "0px", width: "0px"}}></div></div>
                <div className="ps__rail-y" style={{top: "0px", height: "625px" ,right: "0px"}}><div className="ps__thumb-y" tabindex="0" style={{top: "0px", height: "116px"}}></div></div> */}
            </div>
        </>
    );
}
 
export default Layout;