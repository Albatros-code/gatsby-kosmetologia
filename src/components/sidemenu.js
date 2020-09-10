import React, { useRef, useEffect } from "react";
import { Link } from "gatsby"

// function useOutsideAlerter(ref) {
//     useEffect(() => {
//         // Alert if clicked on outside of element
//         function handleClickOutside(event) {
//             if (ref.current && !ref.current.contains(event.target)) {
//                 alert("You clicked outside of me!");
//             }
//         }

//         // Bind the event listener
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             // Unbind the event listener on clean up
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [ref]);
// }

const SideMenuButton = (props) => {
    
    const isActive = ( "/" + props.activePage === props.linkTo) ? true : false

    return (
        <Link to={props.linkTo}>
            <button className={`sidemenu-button ${isActive ? "sidemenu-button-active" : ""}`}>{props.children}</button>
        </Link>
    )
}

const SideMenu = React.forwardRef((props, ref) => {
    const wrapperRef = useRef(null);

    const { handleClickOutside } = props

    useEffect(() => {
        // Alert if clicked on outside of element
        function handleClickOutsideListener(event) {
            if (wrapperRef.current && (!wrapperRef.current.contains(event.target) && !ref.current.contains(event.target)) ){
                handleClickOutside()
            }
        }
        
        document.addEventListener("mousedown", handleClickOutsideListener);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideListener);
        };
    }, [wrapperRef, handleClickOutside, ref]);

    return(
        <div ref={props.isOpen ? wrapperRef : null}>
            <div className="sidemenu-header">
                <h4>Sprawdź</h4>
            </div>
            <div className="sidemenu-bar">
                <SideMenuButton linkTo="/" activePage={props.activePage}>O mnie</SideMenuButton>
                <SideMenuButton linkTo="/salon" activePage={props.activePage}>Salon</SideMenuButton>
                <SideMenuButton linkTo="/oferta" activePage={props.activePage}>Oferta</SideMenuButton>
                <SideMenuButton linkTo="/contact" activePage={props.activePage}>Kontakt</SideMenuButton>
            </div>
            <div className="sidemenu-footer">
                No elo
            </div>
        </div>
    )
})

export default SideMenu