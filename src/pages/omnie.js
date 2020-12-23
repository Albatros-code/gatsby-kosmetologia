import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const About = ( { data} ) => {

  return (
    <Layout activePage="omnie">
      <div className="main-container-text">
        <h1>O mnie</h1>
        <p className="switch-order">Kosmetolog Weronika Jarząb, prowadzę mały salon. I tutaj jeszcze kawałek tekstu ogólnego, żeby ładnie wyglądało. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum in ipsum non pretium. Curabitur egestas, libero eu volutpat volutpat, nisi ante condimentum mi, et viverra ex turpis eget elit. Duis non mauris vel enim cursus rhoncus eu id ex. Praesent
        </p>
        <Img
          className="image1"
          fluid={data.image1.childImageSharp.fluid}
          alt="There is a face on the picture!"
          />
        <p className="switch-order">Kosmetolog Weronika Jarząb, prowadzę mały salon. I tutaj jeszcze kawałek tekstu ogólnego, żeby ładnie wyglądało. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum in ipsum non pretium. Curabitur egestas, libero eu volutpat volutpat, nisi ante condimentum mi, et viverra ex turpis eget elit. Duis non mauris vel enim cursus rhoncus eu id ex. Praesent
        </p>
        <h2>Przede wszystkim wiedza</h2>
        <p>Zawodowo kosmetologią zajmuję się od 7 lat. Wiedzę zdobywałam na Uniwersytecie Kosmetologii we Wrocławiu. Jednak to tylko podstawy, nadal stale się rozwijam korzystając z co raz to nowych żródeł wiedzy. Świat kosmetologii prężnie się rozwija, ciągle szukam, czytam i szkolę się, aby być na bieżąco z nowinkami i móc oferować najnowocześniejsze fajerwerki. Doświadczenie zebrane podczas pracy w różnych wrocławskich salonach pozwoliło mi wreszcie otworzyć mój własny kącik. 
        </p>
        <h2>Moje motto</h2>
        <p>W pracy łączę naukowe rozwiązania i przytulną atmosferę. A tutaj dopisze resztę tekstu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum in ipsum non pretium. Curabitur egestas, libero eu volutpat volutpat, nisi ante condimentum mi, et viverra ex turpis eget elit. Duis non mauris vel enim cursus rhoncus eu id ex. Praesent a est id tellus consectetur commodo. Quisque eu dui a ante sollicitudin facilisis sit amet nec tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt quis ante
        </p>
        <h2>Dlaczego kosmetologia?</h2>  
        <p>eu mattis. Curabitur vehicula purus ac augue consectetur congue. Integer sit amet nulla id lorem elementum vulputate eget eleifend mauris. Vivamus justo magna, gravida id interdum nec, placerat placerat nisi. Phasellus dignissim dolor ut elementum venenatis. Maecenas ipsum libero, venenatis in augue ac, hendrerit laoreet est. Curabitur non tincidunt dolor. Curabitur luctus purus ut lorem mollis ultricies. Curabitur pulvinar euismod augue, blandit convallis eros pharetra in.
        </p>
        <h2>Kolejny mądry nagłówek</h2> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum in ipsum non pretium. Curabitur egestas, libero eu volutpat volutpat, nisi ante condimentum mi, et viverra ex turpis eget elit. Duis non mauris vel enim cursus rhoncus eu id ex. Praesent a est id tellus consectetur commodo. Quisque eu dui a ante sollicitudin facilisis sit amet nec tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt quis ante eu mattis. Curabitur vehicula purus ac augue consectetur congue. Integer sit amet nulla id lorem elementum vulputate eget eleifend mauris. Vivamus justo magna, gravida id interdum nec, placerat placerat nisi. Phasellus dignissim dolor ut elementum venenatis. Maecenas ipsum libero, venenatis in augue ac, hendrerit laoreet est. Curabitur non tincidunt dolor. Curabitur luctus purus ut lorem mollis ultricies. Curabitur pulvinar euismod augue, blandit convallis eros pharetra in.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum in ipsum non pretium. Curabitur egestas, libero eu volutpat volutpat, nisi ante condimentum mi, et viverra ex turpis eget elit. Duis non mauris vel enim cursus rhoncus eu id ex. Praesent a est id tellus consectetur commodo. Quisque eu dui a ante sollicitudin facilisis sit amet nec tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt quis ante eu mattis. Curabitur vehicula purus ac augue consectetur congue. Integer sit amet nulla id lorem elementum vulputate eget eleifend mauris. Vivamus justo magna, gravida id interdum nec, placerat placerat nisi. Phasellus dignissim dolor ut elementum venenatis. Maecenas ipsum libero, venenatis in augue ac, hendrerit laoreet est. Curabitur non tincidunt dolor. Curabitur luctus purus ut lorem mollis ultricies. Curabitur pulvinar euismod augue, blandit convallis eros pharetra in.
        </p>
      </div>
    </Layout>
  )
}

export default About

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
  image1: file(relativePath: { eq: "ryj.jpg" }) {
    ...imageBig
  }
}
`