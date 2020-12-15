import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Footer = () => {

    const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
                title
                author
                }
            }
        }
    `)

    return(
        <div className="footer">
            <p>{data.site.siteMetadata.author} 2020</p>
        </div>
    )
}

export default Footer