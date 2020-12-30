import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { OfertTable, OfertTableRow} from "../components/ofertTable"

const oferta = ({ data }) => {

  const groupServices = data.allServiceGroupsJson.edges.map(edge => edge.node)
  
  const services = (serviceGroupSlug) => {
    const servicesList = data.allServicesJson.nodes.map((service, index) => {
      if (service.group === serviceGroupSlug){
        return (
          <OfertTableRow linkTo={`/service/${service.slug}`} key={service.slug + index}>
            {service.name}
          </OfertTableRow>
        )
      }
      return null
    })
    
    return (
      <>
        {servicesList}
      </>
    )
  }

  const groupServicesList = groupServices.map(({ name, slug }, index) => {
    const innerContent = services(slug)

    return (
      <OfertTableRow linkTo={`/serviceGroup/${slug}`} innerContent={innerContent} key={index + slug}>
        {name}
      </OfertTableRow>
    )
  })

  return(
    <Layout activePage="oferta">
        <div className="main-container-text">
          <h1>Oferta</h1>
          <p>Wybierz kategorię, aby dowiedzieć się więcej o zabiegach. Jeżeli nie wiesz jaki zabieg jest najlepszy dla Ciebie, to zadzwoń i umów się na darmową konsultację!</p>
          <OfertTable style={{maxWidth: "300px"}}>
            {groupServicesList}
          </OfertTable>
        </div>
      </Layout>

    )
}

export default oferta

export const data = graphql`
query {
  allServiceGroupsJson {
    edges {
      node {
        slug
        name
      }
    }
  }
  allServicesJson{
    nodes {
      name
      prize
      slug
      time
      description1
      group
    }
  }
}
`