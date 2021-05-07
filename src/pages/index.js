import React from "react"
import Header from '../components/Header'
import './blogs.css'
import logo from '../images/BlogPost.jpg'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <img src={logo} alt='logo' className='bg-img' />
    </div>
  )
}

export default IndexPage
