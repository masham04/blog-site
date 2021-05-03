import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from "gatsby";
import './blog.css'

const blog = ({ pageContext }) => {
    const blog = pageContext
    const raw = JSON.parse(blog.body)
    const data = documentToReactComponents(raw)

    return (
        <div>
            <Link to='/blogs'><button>Go Back</button></Link>
            <div className='data'>
                <h1>{blog.title}</h1>
                <img src={blog.image} id='img' alt='cover' />
                <p>{data}</p>
            </div>
        </div>
    )
}

export default blog