import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

const TipCalc = () => {
    return (
        <React.Fragment>
            <SEO />
            <Layout>
                <div>Tip Calculator</div>
            </Layout>
        </React.Fragment>
    )
}

export default TipCalc