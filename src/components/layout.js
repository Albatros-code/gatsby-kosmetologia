import React, { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import MenuBar from "./menu"
//import "../style/style.css"
import "../style/style.scss"
import SideMenu from "./sidemenu"
import { Helmet } from 'react-helmet'
import  biglogo from "../images/logo-small.svg"

const headerHeight = 150;
const breakpointPhone = 600;

const Layout = (props) => {

    const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
                title
                author
                }
            }
        }
    `
    )

    const { title } = data.site.siteMetadata

    const ref = useRef(null);

    const [isLoaded, setIsLoaded]  = useState(true);
    const [isScrolled, setIsScrolled]  = useState(false);
    
    useEffect(() => {
        function updateInerWidthCssProp(){
            document.documentElement.style.setProperty('--window-width', `${document.body.clientWidth}px`) 
        }
        
        updateInerWidthCssProp()

        window.addEventListener("resize", updateInerWidthCssProp)
        return () =>{
            window.removeEventListener("resize", updateInerWidthCssProp)
        }
    },[]);

    useEffect(() => {

        const url = typeof window !== 'undefined' ? window.location.href : '';

        const lastPagePos = window.localStorage.getItem('posY')
        const newPagePos = lastPagePos < headerHeight ? lastPagePos : headerHeight

        // if (lastPagePos < headerHeight && window.innerWidth > breakpointPhone){
        if (!url.includes("#") && window.innerWidth > breakpointPhone){
            window.scroll(0, newPagePos)
        }
        setIsLoaded(true)
        return() => {
            window.localStorage.setItem('posY', window.pageYOffset)
        }
    },[]);

    useEffect(()=> {
        function handleScrollBelowHeader(event){
            const scrollLength = (window.innerWidth < breakpointPhone) ? 0 : headerHeight;
            
            if (window.pageYOffset > scrollLength){
                setIsScrolled(true)
                //document.documentElement.style.setProperty('--header-height', `50px`)
            } else {
                setIsScrolled(false)
                //document.documentElement.style.setProperty('--header-height', `200px`)
            }
        } 
        
        window.addEventListener("scroll", handleScrollBelowHeader)
        return() => {
            window.removeEventListener("scroll", handleScrollBelowHeader )
        }
    },[]);

    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);

    function handleHamburgerClick(){
        setIsOpenSideMenu(prevState => !prevState)
        console.log("hamburger clicked")
    }    

    return(
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        </Helmet>

        { isLoaded ?
            <>
                <div className={`sidemenu-background ${isOpenSideMenu ? "sidemenu-open" : ""}`}></div>
                <div className="main-wrapper">
                    <div className={`sidemenu-container ${isOpenSideMenu ? "sidemenu-open" : ""}`}>
                        <SideMenu ref={ref} isOpen={isOpenSideMenu} handleClickOutside={()=>setIsOpenSideMenu(prevState => !prevState)}/>
                    </div>

                    <div className="header">
                        <div className="header-big">
                            <img src={biglogo} alt="logo" className="big-logo"/>
                            <div>
                                <h1>Weronika Jarząb</h1>
                                <h2>KOSMETOLOGIA </h2>               
                            </div>
                        </div>
                        <div className={`menu-container ${isScrolled ? "menu-container-sticky" : ""}`}>
                            <MenuBar ref={ref} isScrolled={isScrolled} activePage={props.activePage} handleHamburgerClick={handleHamburgerClick}/>
                        </div>
                    </div>
                    <div className="main-container">
                        {props.children}
                    </div>
                    <Footer data={data}/>
                </div>
            </>
            :
            <>
                <div className="loading-container">
                    No elo
                </div>
            </>
        }


        
        </>
    )
}

const Footer = ( {data} ) => {

    return(
        <div className="footer">
            <p>{data.site.siteMetadata.author} 2020</p>
        </div>
    )
}

export default Layout