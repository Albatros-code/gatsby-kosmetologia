import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const oferta = ({ data }) => {
    return(
        <Layout activePage="oferta">
          <div className="main-container-text">
            <h1>Oferta</h1>
            <Img
              className="image1"
              fluid={data.image1.childImageSharp.fluid}
              alt="There is a face on the picture!"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum in ipsum non pretium. Curabitur egestas, libero eu volutpat volutpat, nisi ante condimentum mi, et viverra ex turpis eget elit. Duis non mauris vel enim cursus rhoncus eu id ex. Praesent a est id tellus consectetur commodo. Quisque eu dui a ante sollicitudin facilisis sit amet nec tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt quis ante eu mattis. Curabitur vehicula purus ac augue consectetur congue. Integer sit amet nulla id lorem elementum vulputate eget eleifend mauris. Vivamus justo magna, gravida id interdum nec, placerat placerat nisi. Phasellus dignissim dolor ut elementum venenatis. Maecenas ipsum libero, venenatis in augue ac, hendrerit laoreet est. Curabitur non tincidunt dolor. Curabitur luctus purus ut lorem mollis ultricies. Curabitur pulvinar euismod augue, blandit convallis eros pharetra in.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum in ipsum non pretium. Curabitur egestas, libero eu volutpat volutpat, nisi ante condimentum mi, et viverra ex turpis eget elit. Duis non mauris vel enim cursus rhoncus eu id ex. Praesent a est id tellus consectetur commodo. Quisque eu dui a ante sollicitudin facilisis sit amet nec tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt quis ante eu mattis. Curabitur vehicula purus ac augue consectetur congue. Integer sit amet nulla id lorem elementum vulputate eget eleifend mauris. Vivamus justo magna, gravida id interdum nec, placerat placerat nisi. Phasellus dignissim dolor ut elementum venenatis. Maecenas ipsum libero, venenatis in augue ac, hendrerit laoreet est. Curabitur non tincidunt dolor. Curabitur luctus purus ut lorem mollis ultricies. Curabitur pulvinar euismod augue, blandit convallis eros pharetra in.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum in ipsum non pretium. Curabitur egestas, libero eu volutpat volutpat, nisi ante condimentum mi, et viverra ex turpis eget elit. Duis non mauris vel enim cursus rhoncus eu id ex. Praesent a est id tellus consectetur commodo. Quisque eu dui a ante sollicitudin facilisis sit amet nec tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt quis ante eu mattis. Curabitur vehicula purus ac augue consectetur congue. Integer sit amet nulla id lorem elementum vulputate eget eleifend mauris. Vivamus justo magna, gravida id interdum nec, placerat placerat nisi. Phasellus dignissim dolor ut elementum venenatis. Maecenas ipsum libero, venenatis in augue ac, hendrerit laoreet est. Curabitur non tincidunt dolor. Curabitur luctus purus ut lorem mollis ultricies. Curabitur pulvinar euismod augue, blandit convallis eros pharetra in.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum in ipsum non pretium. Curabitur egestas, libero eu volutpat volutpat, nisi ante condimentum mi, et viverra ex turpis eget elit. Duis non mauris vel enim cursus rhoncus eu id ex. Praesent a est id tellus consectetur commodo. Quisque eu dui a ante sollicitudin facilisis sit amet nec tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt quis ante eu mattis. Curabitur vehicula purus ac augue consectetur congue. Integer sit amet nulla id lorem elementum vulputate eget eleifend mauris. Vivamus justo magna, gravida id interdum nec, placerat placerat nisi. Phasellus dignissim dolor ut elementum venenatis. Maecenas ipsum libero, venenatis in augue ac, hendrerit laoreet est. Curabitur non tincidunt dolor. Curabitur luctus purus ut lorem mollis ultricies. Curabitur pulvinar euismod augue, blandit convallis eros pharetra in.</p>
            <h2 id="paznokcie">Paznokcie</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum in ipsum non pretium. Curabitur egestas, libero eu volutpat volutpat, nisi ante condimentum mi, et viverra ex turpis eget elit. Duis non mauris vel enim cursus rhoncus eu id ex. Praesent a est id tellus consectetur commodo. Quisque eu dui a ante sollicitudin facilisis sit amet nec tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt quis ante eu mattis. Curabitur vehicula purus ac augue consectetur congue. Integer sit amet nulla id lorem elementum vulputate eget eleifend mauris. Vivamus justo magna, gravida id interdum nec, placerat placerat nisi. Phasellus dignissim dolor ut elementum venenatis. Maecenas ipsum libero, venenatis in augue ac, hendrerit laoreet est. Curabitur non tincidunt dolor. Curabitur luctus purus ut lorem mollis ultricies. Curabitur pulvinar euismod augue, blandit convallis eros pharetra in.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum in ipsum non pretium. Curabitur egestas, libero eu volutpat volutpat, nisi ante condimentum mi, et viverra ex turpis eget elit. Duis non mauris vel enim cursus rhoncus eu id ex. Praesent a est id tellus consectetur commodo. Quisque eu dui a ante sollicitudin facilisis sit amet nec tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt quis ante eu mattis. Curabitur vehicula purus ac augue consectetur congue. Integer sit amet nulla id lorem elementum vulputate eget eleifend mauris. Vivamus justo magna, gravida id interdum nec, placerat placerat nisi. Phasellus dignissim dolor ut elementum venenatis. Maecenas ipsum libero, venenatis in augue ac, hendrerit laoreet est. Curabitur non tincidunt dolor. Curabitur luctus purus ut lorem mollis ultricies. Curabitur pulvinar euismod augue, blandit convallis eros pharetra in.</p>
          </div>
        </Layout>

    )
}

export default oferta

export const image = graphql`
fragment imageBig on File {
  childImageSharp {
    fluid {
      ...GatsbyImageSharpFluid
    }
  }
}
`

export const data = graphql`
query {
  image1: file(relativePath: { eq: "images/face.jpg" }) {
    ...imageBig
  }
  image2: file(relativePath: { eq: "images/wellness.jpg" }) {
    ...imageBig
  }
}
`