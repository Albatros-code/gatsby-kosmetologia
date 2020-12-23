import React from 'react';
import { graphql } from 'gatsby';
//import Img from 'gatsby-image';

import Layout from "../components/layout"

export const query = graphql`
    query($slug: String!) {
        servicesJson(slug: { eq: $slug }) {
            name
            description1
            description2
            prize
            time
        }
    }
`

const service = ({ data }) => {
    data = data.servicesJson

    return (
        
        <Layout>
            <div className="main-container-text">
                <h1>{data.name}</h1>
                <p>{data.description2}</p>
                <p>prize: {data.prize}</p>
                <p>time: {data.time}</p>
            </div>
        </Layout>
    )
}

export default service