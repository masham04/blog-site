import React from "react"
import { Link } from "gatsby"
import './blogs.css'
import logo from '../images/BlogPost.jpg'

const IndexPage = () => {
  return (
    <div>
      {/*
      <div className='btn'>
        <Link to="/blogs"><button className='btn1'>Blog Page</button></Link>
      </div> */}
      <ul>
        <li style={{ float: 'left' }}><Link id='a' to="/"><h2>BLOGSITE</h2></Link></li>
        <li><Link id='a' to="/contact">Contact</Link></li>
        <li><Link id='a' to="/blogs">Blogs</Link></li>
      </ul>
      <img src={logo} alt='logo' className='bg-img' />
    </div>
  )
}

export default IndexPage
