import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from "../components/layout"

export const query = graphql`
    query($slug: String!) {
        servicesJson(slug: { eq: $slug }) {
            name
            description1
            description2
            prize
            time
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`

const service = ({ data }) => {
    data = data.servicesJson

    return (
        
        <Layout>
            <div className="main-container-text">
                <h1>{data.name}</h1>
                <div className="services-picture">
                    <Img style={{height: "100%"}} fluid={data.image.childImageSharp.fluid}/>
                </div>
                <p>{data.description2}</p>
                <span className="service-data-span"><i className="fas fa-tag"></i> {data.prize} zł</span>
                <span className="service-data-span"><i className="far fa-clock"></i> {data.time} min </span> 
            </div>
        </Layout>
    )
}

export default service