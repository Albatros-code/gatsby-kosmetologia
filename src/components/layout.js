import React, { useState, useRef } from "react"
import MenuBar from "./menu"
import "../style/style.css"
import SideMenu from "./sidemenu"

const Layout = (props) => {
    const ref = useRef(null);

    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);

    function handleHamburgerClick(){
        setIsOpenSideMenu(prevState => !prevState)
        console.log("hamburger clicked")
    }    

    return(
        <>
        <div className="header">
            <MenuBar ref={ref} activePage={props.activePage} handleHamburgerClick={handleHamburgerClick}/>
        </div>
        <div className={`sidemenu-background ${isOpenSideMenu ? "sidemenu-open" : ""}`}></div>
        <div className="main-wrapper">
            <div className={`sidemenu-container ${isOpenSideMenu ? "sidemenu-open" : ""}`}>
                <SideMenu ref={ref} isOpen={isOpenSideMenu} handleClickOutside={()=>setIsOpenSideMenu(prevState => !prevState)}/>
            </div>
            <div className="main-container">
                {props.children}
            </div>
            <div className="footer">
                <p>Created by Albatros</p>
            </div>
        </div>
        
        </>
    )
}

export default Layout