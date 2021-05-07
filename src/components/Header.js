import React from 'react'
import './header.css'
import { Link } from "gatsby"

const Header = () => {
    return (
        <div>
            <ul>
                <li style={{ float: 'left' }}><Link id='a' to="/"><h2>BLOGSITE</h2></Link></li>
                <li><Link id='a' to="/contact">Contact</Link></li>
                <li><Link id='a' to="/blogs">Blogs</Link></li>
            </ul>
        </div>
    )
}

export default Header
