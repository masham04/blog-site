import React from 'react'
import Header from '../components/Header'
import './blogs.css'
import logo from '../images/pic.jpg'
const contact = () => {
    return (
        <div>
            <Header />
            <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '10vh' }} class="card">
                <img src={logo} alt="Avatar" style={{ width: "100%" }} />
                <div class="container">
                    <h4><b>Muhammad Masham</b></h4><br />
                    <p>mmasham12@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default contact
