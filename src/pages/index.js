import React from 'react';
import SEO from '../components/seo'
import Layout from '../components/layout'

const Index = () => {
    return (
        <React.Fragment>
            <SEO />
            <Layout>
                <h3>Hello World</h3>
                <a href="/about"><img className="avatar" src="https://via.placeholder.com/150" alt="Lance Pu"/></a>
                <h3>Welcome to my <a href="/project">portfolio</a> / <a href="/blog">blog</a> / <a href="/tool">utility belt</a></h3>
            </Layout>
        </React.Fragment>
    )
}

export default Index