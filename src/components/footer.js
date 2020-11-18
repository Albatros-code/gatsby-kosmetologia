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
            <p>Page is created by {data.site.siteMetadata.author}</p>
        </div>
    )
}

export default Footer