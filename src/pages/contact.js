import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const contact = ({data}) => {
    return(
        <Layout activePage="contact">
          <div className="main-container-text">
            <h1>Kontakt</h1>
            <div className="contact-grid">
              <div className="text">
                
                <a href="tel:+48517977667" target="_blank" rel="noreferrer">
                  <div className="icon-with-text">
                    <i className="fas fa-phone"></i>
                    <p>517 977 667</p>
                  </div>
                </a>
                
                <div className="icon-with-text">
                  <i className="far fa-clock"></i>
                  <p>Godziny otwarcia:<br/>poniedziałek - piątek<br/>9:00 - 20:00</p>
                </div>

                <div className="icon-with-text">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>Salon Metamorfoza<br/>ul. Trawowa 34a<br/>54-614 Wrocław</p>
                </div>

                <p>Inne kanały:</p>
                <a href="mailto:kosmetologia.jarzab@gmail.com" target="_blank" rel="noreferrer">
                  <div className="icon-with-text">
                    <i className="far fa-envelope"></i>
                    <p>kosmetologia.jarzab@gmail.com</p>
                  </div>
                </a>
                <a href="https:/www.facebook.com/kosmetologia.jarzab/" target="_blank" rel="noreferrer">
                  <div className="icon-with-text">
                    <i className="fab fa-facebook"></i>
                    <p>facebook.com/kosmetologia.jarzab/</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/kosmetologia.jarzab/" target="_blank" rel="noreferrer">
                  <div className="icon-with-text">
                    <i className="fab fa-instagram"></i>
                    <p>instagram.com/kosmetologia.jarzab/</p>
                  </div>
                </a>

              </div>
              <div className="map">
                <iframe
                  className="map-object"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1116.068397498634!2d16.94910926898883!3d51.09943784127408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a036bd4c37084ab!2sKosmetologia%20Weronika%20Jarz%C4%85b!5e0!3m2!1spl!2spl!4v1608218315476!5m2!1spl!2spl"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  //tabindex="0"
                  title="google-map"
                ></iframe>
              </div>
            </div>
          </div>
        </Layout>
    )
}

export default contact

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
  image1: file(relativePath: { eq: "face.jpg" }) {
    ...imageBig
  }
  image2: file(relativePath: { eq: "wellness.jpg" }) {
    ...imageBig
  }
}
`