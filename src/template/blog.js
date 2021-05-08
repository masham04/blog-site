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
            
            <div className='data'>

                <img src={blog.image} id='img' alt='cover' width='100%' height='600px' />
                <h1>{blog.title}</h1>
                <p>{data}</p>
            </div>
        </div>
    )
}

export default blog