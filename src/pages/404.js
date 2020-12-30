import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'

const Page404 = () => {

  return (
    <Layout>
      <div className="main-container-text">
        <h1>Strona nie istnieje</h1>
        <p>Przejdź do strony głównej - <Link to='/' style={{color: 'gray'}}class="link">strona główna</Link>.</p>
      </div>
    </Layout>
  )
}

export default Page404