import React from 'react';
import { graphql, Link } from 'gatsby';
//import Img from 'gatsby-image';

import Layout from "../components/layout"
import { OfertTable, OfertTableRow} from "../components/ofertTable"

export const query = graphql`
    query($slug: String!) {
        serviceGroupsJson(slug: { eq: $slug }) {
            name
            description
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

    //const services = data.allServicesJson.map(node => ({...node}))
  
    const servicesList = data.allServicesJson.nodes.map(({ name, slug }, index) => {
  
      return (
        <OfertTableRow>
            <Link key={index} to={`/service/${slug}`}>
                {`${index + 1}. ${name}`}
            </Link>
        </OfertTableRow>
      )
    })

    return (
        
        <Layout>
            <div className="main-container-text">
                <h1>{serviceGroup.name}</h1>
                <p>{serviceGroup.description}</p>
                <OfertTable>
                    {servicesList}
                </OfertTable>
            </div>
        </Layout>
    )
}

export default serviceGroup