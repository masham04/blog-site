import React from "react"
import { Link } from "gatsby"
import './blogs.css'

const IndexPage = () => {
  return (
    <>
      <h1>BLOGSITE</h1>
      <div className='btn'>
        <Link to="/blogs"><button className='btn1'>Blog Page</button></Link>
      </div>

      <div className='image'>
      </div>
    </>
  )
}

export default IndexPage
