import React, { useEffect, useLayoutEffect } from 'react';

//import './ofertTable.scss';

export const OfertTable = (props) => {
    
    //OfertTable.Row = OfertTableRow()

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

    const ref = React.useRef(null)
    //const innerContentHeight = ref.current ? ref.current.scrollHeight : null

    console.log("ref is:")
    console.log(ref.current)
    //console.log(ref.current.scrollHeight)
    useLayoutEffect(() => {
        const setInnerHeight = () => {
            console.log("use effect")
            console.log(ref.current)
            console.log(ref.current.scrollHeight)
            //ref.current.style.maxHeight = ref.current ? ref.current.scrollHeight : null

            ref.current.style.maxHeight = `${ref.current.scrollHeight}px`
        }

        setInnerHeight()
        //let height = document.querySelectorAll('[class="ofert-table-tr"]')//.scrollHeight
    },[])

    return (
        <>
            {/* <tr className={`elo-class-name ${props.className}`}> */}
            <tr className={`ofert-table-tr ${props.innerContent ? "ofert-table-tr-header" : ""} ${props.className}`}>
                <td className="ofert-table-td" style={{backgroundColor: `${props.color ? props.color : null}`}}>{/* style={{backgroundColor: props.color, padding: `10px 10px 10px ${indent ? indent : 20}px`}} */}
                    {props.children}
                    {props.innerContent ? 
                        <button 
                            className={`drawer-button ${isOpen ? "drawer-button-rotated" : ""}`}
                            onClick={() => setIsOpen(prev => !prev)}
                        // ><i class="fas fa-chevron-down"></i></button>
                        ><i className="fas fa-caret-down"></i></button>
                        : null}
                </td>
            </tr>
            <tr className="inner-content-tr">
                <td className="inner-content-td">
                    <div className={`inner-content-close ${isOpen ? "inner-content-open" : ""}`} ref={ref}>
                        {/* { isOpen ? props.innerContent : null } */}
                        <table className="inner-table">
                            <tbody>
                                {props.innerContent}
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
        </>
    )
}