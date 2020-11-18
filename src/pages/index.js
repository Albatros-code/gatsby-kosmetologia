import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import slidesData from "../data/slides"

const Home = ( { data } ) => {
  const slides = slidesData.map((slide, index) => ({
    ...slide,
    image: data["image" + (index + 1)].childImageSharp.fluid

  }))

  return (
    <Layout activePage="">
      <PresentationBar images={data} slides={slides}/>
      <div className="section-two">
        <div className="side-fade">
          <Img
            className="image-bg"
            fluid={data.imageSection2.childImageSharp.fluid}
            //style={{opacity: 0.5}}
            //fluid={props.image
            //image: props.images.image3.childImageSharp.fluid,
          />
        </div>
        <div className="section-two-container">
          <div className="header">
            <h1>Darmowe konsultacje!</h1>
          </div>
          <div className="bottom-section">
            <p className="comment">Jeżeli masz problem z cerą, a nie wiesz jaki zabieg mógłby pomóc to umów się na darmową koncultację. Spotkanie pomoże przybliżyć możliwości kosmetologa w sferze dbania o cerę, dobrać odpowiednią serię zabiegów lub kosmetyki.</p>
            <button className="button" onClick={() => window.location.href='tel:+48791944607'}>Umów się teraz</button>
          </div>
        </div>
      </div>
      <div className="section-cards">
          <div className="side-fade">
            <Img
              className="image-bg"
              fluid={data.imageSection3.childImageSharp.fluid}
              //style={{opacity: 0.5}}
            />
          </div>
          <div className="section-cards-container">
            <PresentationCard
              title="Henna"
              image={data.cardImage1.childImageSharp.fluid}
              button="Czytaj więcej"
            >
              Umiejętnie poprawione brwi pomagą podkreślić prawdziwe piękno.
            </PresentationCard>
            <PresentationCard
              title="Zabieg Bilinie Vita+"
              image={data.cardImage2.childImageSharp.fluid}
              button="Czytaj więcej"
              reverse ={true} 
            >
              Krótka seria tego zabiegu pozwoli cieszyć się młodą skórą dużo dłużej. I jeszcze dodatkowy tekst, żeby zobacyzć so się stanie z divem. I jeszcze dodatkowy tekst, żeby zobacyzć so się stanie z divem. I jeszcze dodatkowy tekst, żeby zobacyzć so się stanie z divem.
            </PresentationCard>
            <PresentationCard
              title="Pedicure hybrydowy"
              image={data.cardImage3.childImageSharp.fluid}
              button="Czytaj więcej"
            >
              Zadbaj o swoje nogi. Pedicure to nie tylko ładne paznokcie, ale także zdrowa skóra stóp.
            </PresentationCard>

          </div>
      </div>
      <div className="section-half">
        <div className="section-half-first">
          <Img
            className="image-bg"
            fluid={data.imageSection4.childImageSharp.fluid}
            //style={{opacity: 0.5}}
          />
        </div>
        <div className="section-half-second">
          No elo
        </div>
      </div>
    </Layout>
  )
}

const PresentationBar = ( props ) => {

  const [ currentSlide, setCurrentSlide ] = useState(0)
  const [ shifting, setShifting ] = useState(true)
  
  useEffect(() => {
    const changeSlides = () => {
      setCurrentSlide( prevVal => (parseInt(prevVal) + 1) % props.slides.length)
    }

    
    const intervals = setInterval(changeSlides, 3000);
    //const intervals = null;

    if (shifting === false) {
      clearInterval(intervals)
    } 
    
    return () => {
      clearInterval(intervals)
    }

  },[shifting, props.slides.length])

  const changeSlide = (val) => {
    console.log("slide changed to: " + val)
    setCurrentSlide(val)
    setShifting(false)
    setTimeout(() => setShifting(true), 60000)
  } 

  return(
    <div className="presentation-bar">
      {props.slides.map((slide, index) => {
        const isActive = currentSlide === index ? true : false

        return (
          <PresentationBarSlide
            key={"slide" + index}
            image={slide.image}
            title={slide.title}
            comment={slide.comment}
            buttonText={slide.buttonText}
            active={isActive}
            linkTo={slide.linkTo}
          />
        )
      })}
      <PresentationBarNav 
        handleClick={changeSlide}
        itemCount={props.slides.length}
        activeItem={currentSlide}
      />
    </div>
  )
}

const PresentationBarSlide = (props) => {
  return (
    <div className={`presentation-bar-main ${props.active ? "active" : ""}`} >
      <div className="side-fade">
        <Img
          className="image-bg"
          fluid={props.image}
          //style={{ height: "100%", width: "100%" }}
          imgStyle={{ objectFit: "cover" }}
          //fluid={props.image}
          //image: props.images.image3.childImageSharp.fluid,
        />
      </div>
      <div className="presentation-bar-main-container">
        <p className="title">{props.title}</p>
        <div className="bottom-section">
          <p className="comment">{props.comment}</p>
          <Link to={props.linkTo}>
            <button className="button">{props.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const PresentationBarNav = (props) => {

  const buttons = []
  
  for (let i = 0; i < props.itemCount; i++) {

    buttons.push(
      <button
        aria-label={`Select ${i} slide`}
        className={`presentation-bar-btn ${props.activeItem === i ? "presentation-bar-btn-active" : ""}`}
        onClick={() => props.handleClick(i)}
        key={"index" + i}
      ></button>
    )
  }
  

  return(
    <div className="presentation-bar-nav">
      {buttons}
    </div>
  )
}

const PresentationCard = (props) => {
  return (
    <div className={"card-container " + (props.reverse ? "reverse" : "")}>
      <h1>{props.title}</h1>
      <div className="card-image">
        <Img
          className="image-bg"
          // className="image-bg"
          fluid={props.image}
        />
      </div>
      <p className="comment">
        {props.children}
      </p>
      <button className="button">{props.button}</button>
    </div>
  )
}

export default Home

export const image = graphql`
fragment images on File {
  childImageSharp {
    fluid(maxWidth: 2000, quality: 100) {
      ...GatsbyImageSharpFluid
      ...GatsbyImageSharpFluidLimitPresentationSize
    }
  }
}
`

export const data = graphql`
query {
  image1: file(relativePath: { eq: "images/slides/image1.jpg" }) {
    ...images
  }
  image2: file(relativePath: { eq: "images/slides/image2.jpg" }) {
    ...images
  }
  image3: file(relativePath: { eq: "images/wellness.jpg" }) {
    ...images
  }
  cardImage1: file(relativePath: { eq: "images/cards/image1.jpg" }) {
    ...images
  }
  cardImage2: file(relativePath: { eq: "images/cards/image2.jpg" }) {
    ...images
  }
  cardImage3: file(relativePath: { eq: "images/cards/image3.jpg" }) {
    ...images
  }
  imageSection2: file(relativePath: { eq: "images/others/homepage-bar-1.jpg" }) {
    ...images
  }
  imageSection3: file(relativePath: { eq: "images/others/homepage-bar-2.jpg" }) {
    ...images
  }
  imageSection4: file(relativePath: { eq: "images/others/homepage-bar-3.jpg" }) {
    ...images
  }
}
`