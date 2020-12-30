import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from "../components/layout"
import { OfertTable, OfertTableRow} from "../components/ofertTable"

export const query = graphql`
    query($slug: String!) {
        serviceGroupsJson(slug: { eq: $slug }) {
            name
            description
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        allServicesJson(filter: {group: {eq: $slug}}) {
            nodes {
                name
                prize
                slug
                time
                description1
            }
        }
    }
`
const serviceGroup = ({ data }) => {
    const serviceGroup = data.serviceGroupsJson
  
    const servicesList = data.allServicesJson.nodes.map(({ name, slug, ...data }, index) => {
  
      return (
        <OfertTableRow linkTo={`/service/${slug}`} key={`service ${slug}`}>
                {`${name}`}
                <span className="service-data-table">{data.prize} zł</span>
                <span className="service-data-table">{data.time} min </span> 
        </OfertTableRow>
      )
    })

    return (
        
        <Layout>
            <div className="main-container-text">
                <h1>{serviceGroup.name}</h1>
                <div className="services-picture">
                    <Img style={{height: "100%"}} fluid={serviceGroup.image.childImageSharp.fluid}/>
                </div>
                <p>{serviceGroup.description}</p>
                <OfertTable>
                    {servicesList}
                </OfertTable>
            </div>
        </Layout>
    )
}

export default serviceGroup