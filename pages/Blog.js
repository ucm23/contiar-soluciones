import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import BlogItem from '../components/BlogItem'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzbXdpcnFlbHF4YXlwbG90ZXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwNTYxMjIsImV4cCI6MjAxMTYzMjEyMn0.Il1rEQXO1tk5XrjjFhCtMFE0nqqJBbfBx_b2KqEaMD0"
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzbXdpcnFlbHF4YXlwbG90ZXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwNTYxMjIsImV4cCI6MjAxMTYzMjEyMn0.Il1rEQXO1tk5XrjjFhCtMFE0nqqJBbfBx_b2KqEaMD0"
const url = "https://bsmwirqelqxayplotewx.supabase.co/rest/v1/blogs";

import { Skeleton } from 'antd';
import { indexBlogs } from '../api/blogs'

const Blog = () => {
    const [Blogdata, setBlogdata] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await indexBlogs({ project_id: 3 })
            setBlogdata(response?.data)
        } catch (error) {
            console.log("🚀 ~ getData ~ error:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Layout>
            <header className='blog-header'>
                {/* Barra de navegación */}
                <Navbar>
                    <Fade direction="right">
                        <h1 className="hero_title">
                            Blog
                        </h1>
                    </Fade>
                </Navbar>
                {/* Encabezado */}
                {/*<section className="hero_container container">

    </section>*/}
            </header>

            <section className='blog cont'>
                <div className='conteni topMarign'>
                    <div className='heading'>
                        <h3>Conoce más sobre tecnología a través de nuestro blog</h3>
                    </div>

                    <div className='contain grid topMarign'>
                        {Loading
                            ? (
                                <>
                                    {
                                        Array.from({ length: 6 }).map((_, index) =>
                                            <Skeleton key={index} active />
                                        )
                                    }
                                </>
                            )
                            : (
                                Blogdata.map(({ id, image, created_at, title, body }, i) =>
                                    <BlogItem
                                        key={i}
                                        id={id}
                                        cover={image}
                                        date={created_at}
                                        title={title}
                                        body={body}
                                    />
                                )
                            )

                        }
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Blog