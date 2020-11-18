import React from "react"
import { Link } from "gatsby"
import Hamburger from "../components/hamburger"
import  smalllogo from "../images/logo-small.svg"

const MenuButton = (props) => {
    
    const isActive = ( "/" + props.activePage === props.linkTo) ? true : false

    return (
        <Link to={props.linkTo}>
            <button className={`menu-button ${isActive ? "menu-button-active" : ""}`}>{props.children}</button>
        </Link>
    )
}

const MenuBar = React.forwardRef((props,ref) => {
    return(
        <>
            <div className="menu-small-left">
                <img src={smalllogo} alt="logo" className={`small-logo ${props.isScrolled ? "small-logo-sticky" : ""}`}/>
            </div>
            <div className="menu-bar">
                <MenuButton linkTo="/" activePage={props.activePage}>Home</MenuButton>
                <MenuButton linkTo="/omnie" activePage={props.activePage}>O&#160;mnie</MenuButton>
                <MenuButton linkTo="/oferta" activePage={props.activePage}>Oferta</MenuButton>
                <MenuButton linkTo="/contact" activePage={props.activePage}>Kontakt</MenuButton>
            </div>
            <div className="menu-small-right">
                <Hamburger ref={ref} handleClick={props.handleHamburgerClick}/>
            </div>
        </>
    )
})

export default MenuBar