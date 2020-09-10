import React from "react"
import { Link } from "gatsby"
import Hamburger from "../components/hamburger"

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
            <div className="menu-logo">
                <h1>WJ</h1>
            </div>
            <div className="menu-bar">
                <MenuButton linkTo="/" activePage={props.activePage}>O mnie</MenuButton>
                <MenuButton linkTo="/salon" activePage={props.activePage}>Salon</MenuButton>
                <MenuButton linkTo="/oferta" activePage={props.activePage}>Oferta</MenuButton>
                <MenuButton linkTo="/contact" activePage={props.activePage}>Kontakt</MenuButton>
            </div>
            <div className="menu-right">
                <Hamburger ref={ref} handleClick={props.handleHamburgerClick}/>
            </div>
        </>
    )
})

export default MenuBar