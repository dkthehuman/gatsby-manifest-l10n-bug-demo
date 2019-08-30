import React from "react"
import { Link } from "gatsby"

function IndexPage() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
      }}
    >
      Hola Mundo!
      <br />
      <Link to="/">English</Link>
    </div>
  )
}

export default IndexPage
