import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const contact = ({data}) => {
    return(
        <Layout activePage="contact">
          <div className="main-container-text">
            <h1>Kontakt</h1>
            <div className="contact-grid">
              <div className="text">
                
                <a href="tel:+48517977667" target="_blank" rel="noreferrer">
                  <div className="icon-with-text">
                    <i class="fas fa-phone"></i>
                    <p>517 977 667</p>
                  </div>
                </a>
                
                <div className="icon-with-text">
                  <i class="far fa-clock"></i>
                  <p>Godziny otwarcia:<br/>poniedziałek - piątek<br/>9:00 - 20:00</p>
                </div>

                <div className="icon-with-text">
                  <i class="fas fa-map-marker-alt"></i>
                  <p>Salon Metamorfoza<br/>ul. Trawowa 34a<br/>54-614 Wrocław</p>
                </div>

                <p>Inne kanały:</p>
                <a href="mailto:kosmetologia.jarzab@gmail.com" target="_blank" rel="noreferrer">
                  <div className="icon-with-text">
                    <i class="far fa-envelope"></i>
                    <p>kosmetologia.jarzab@gmail.com</p>
                  </div>
                </a>
                <a href="https:/www.facebook.com/kosmetologia.jarzab/" target="_blank" rel="noreferrer">
                  <div className="icon-with-text">
                    <i class="fab fa-facebook"></i>
                    <p>facebook.com/kosmetologia.jarzab/</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/kosmetologia.jarzab/" target="_blank" rel="noreferrer">
                  <div className="icon-with-text">
                    <i class="fab fa-instagram"></i>
                    <p>instagram.com/kosmetologia.jarzab/</p>
                  </div>
                </a>

              </div>
              <div className="map">
                <iframe
                  className="map-object"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1116.068397498634!2d16.94910926898883!3d51.09943784127408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a036bd4c37084ab!2sKosmetologia%20Weronika%20Jarz%C4%85b!5e0!3m2!1spl!2spl!4v1608218315476!5m2!1spl!2spl"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>








              {/* <div className="contact main-container-text">
                <h1>Kontakt</h1>
                <p>Umów się na wizytę, darmową konsultację bądź zadaj pytania:</p>
                <div>
                  <a href="tel:+48517977667" target="_blank" rel="noreferrer"><p><i class="fas fa-phone"></i> 517 977 667</p></a>
                  <a href="mailto:kosmetologia.jarzab@gmail.com" target="_blank" rel="noreferrer"><p><i class="far fa-envelope"></i> kosmetologia.jarzab@gmail.com</p></a>
                  <a href="https:/www.facebook.com/kosmetologia.jarzab/" target="_blank" rel="noreferrer"><p><i class="fab fa-facebook"></i> facebook.com/kosmetologia.jarzab/</p></a>
                  <a href="https://www.instagram.com/kosmetologia.jarzab/" target="_blank" rel="noreferrer"><p><i class="fab fa-instagram"></i> instagram.com/kosmetologia.jarzab/</p></a>
                </div>
              </div>

              <div className="opening-hours main-container-text">
                <h2>Godziny otwarcia</h2>
                <div className="main-container-text">
                  <i class="far fa-clock"></i>
                  <p>poniedziałek - piątek:<br/>9:00 - 20:00</p>
                </div>
              </div>

              
              <div className="adress-text">
                <div className="main-container-text">
                  <h2>Adres</h2>
                  <div className="adress-icon-container">
                    <div><i class="fas fa-map-marker-alt"></i></div>
                    <div className=" main-container-text">
                      <p>Salon Metamorfoza<br/>
                      ul. Trawowa 34a<br/>
                      54-614 Wrocław</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="adress-map">
                <iframe
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1116.068397498634!2d16.94910926898883!3d51.09943784127408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a036bd4c37084ab!2sKosmetologia%20Weronika%20Jarz%C4%85b!5e0!3m2!1spl!2spl!4v1608218315476!5m2!1spl!2spl"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div> */}

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
  image1: file(relativePath: { eq: "images/face.jpg" }) {
    ...imageBig
  }
  image2: file(relativePath: { eq: "images/wellness.jpg" }) {
    ...imageBig
  }
}
`