import React, { useLayoutEffect } from 'react';
import { Link } from 'gatsby';

export const OfertTable = (props) => {
    return (
        <div className="ofert-table">
            <table>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    )
}

export const OfertTableRow = (props) => {

    const [isOpen, setIsOpen] = React.useState(false)
    const [isContentActive, setIsContentActive] = React.useState(false)

    const ref = React.useRef(null)

    useLayoutEffect(() => {
        if (props.innerContent){
            const setInnerHeight = () => {
                ref.current.style.maxHeight = isOpen ? `${ref.current.scrollHeight}px` : "0px"
            }
            setInnerHeight()        
        }
    },[isOpen, props.innerContent])

    const handleClick = () => {
        setIsOpen(prev => !prev)
        if(!isOpen){
            setIsContentActive(true)
        } else {
            const drawerTime = getComputedStyle(ref.current).transitionDuration
            setTimeout(() => setIsContentActive(false), parseFloat(drawerTime) * 1000)
        } 
    }
    return (
        <>
            <tr className={`ofert-table-tr ${props.innerContent ? "ofert-table-tr-header" : ""} ${props.className}`}>
                <td className={`ofert-table-td`} style={{backgroundColor: `${props.color ? props.color : null}`}}>{/* style={{backgroundColor: props.color, padding: `10px 10px 10px ${indent ? indent : 20}px`}} */}
                    <Link to={props.linkTo}>
                        <div className="ofert-table-link">
                            {props.children}
                        </div>
                    </Link>
                </td>
                {props.innerContent ? 
                    <td className="drawer-button-td">
                        <button 
                            className={`drawer-button ${isOpen ? "drawer-button-rotated" : ""}`}
                            onClick={handleClick}
                            aria-label="open drawer"
                        ><i className="fas fa-caret-down"></i></button>
                    </td>
                : null}
            </tr>
            {props.innerContent ?
                <tr className="inner-content-tr">
                    <td className="inner-content-td" colSpan={2}>
                        <div className={`inner-content-close ${isOpen ? "inner-content-open" : ""}`} ref={ref}>
                            <table className="inner-table">
                                <tbody>
                                    {isContentActive ? props.innerContent : null}
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            : null}
        </>
    )
}