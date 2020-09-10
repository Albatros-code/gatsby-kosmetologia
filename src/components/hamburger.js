import React from 'react'

const Hamburger = React.forwardRef((props, ref) => {
    return(
        // <div ref={ref} role="button" className="hamburger-icon" onClick={props.handleClick}>
        //     <div className="hamburger-bar"></div>
        //     <div className="hamburger-bar"></div>
        //     <div className="hamburger-bar"></div>
        // </div>
        <button ref={ref} className="hamburger-icon" onClick={props.handleClick}>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
        </button>
    )
})

export default Hamburger