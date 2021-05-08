import React from "react"
import Header from '../components/Header'
import './blogs.css'
import logo from '../images/BlogPost.jpg'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div className='home'>
      <Header />
      <img src={logo} alt='logo' className='bg-img' />
      <span><h1 className='main'><Link to='/blogs' style={{ textDecoration: 'none', color: '#61c9ac' }}>Visit Blogs {" "} ➜</Link></h1></span>
    </div>
  )
}

export default IndexPage
