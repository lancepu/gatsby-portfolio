import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

const Index = () => {
    return (
        <React.Fragment>
            <SEO />
            <Layout>
                <div>Hello World</div>
            </Layout>
        </React.Fragment>
    )
}

export default Index