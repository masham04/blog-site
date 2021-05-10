import React from "react"
import Header from '../components/Header'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './blog.css'

const blog = ({ pageContext }) => {
    const blog = pageContext
    const raw = JSON.parse(blog.body)
    const data = documentToReactComponents(raw)

    return (
        <div>
            <Header />
            <div className='data'>
                <h1 className='title'>{blog.title}</h1>
                <img src={blog.image} id='img' alt='cover' />
                <br />
                <p style={{ color: '#555' }}>{data}</p>
            </div>
        </div>
    )
}

export default blog