import React from "react"; 
import Navbar from './Navbar'; 

function Header(){
    return(
        <div id="main"> 
            <Navbar /> 
            <div className='name'>
                <h1 className='the-header'>Prototype</h1> 
            </div>
        </div> 
    )
}

export default Header; 