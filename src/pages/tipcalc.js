import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

class TipCalc extends Component {
  state = { data: {} };
  handleInputChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data }, () => console.log(this.state.data));
  };

  calculateAmount = () => {
    const { billAmount, taxAmount, personCount } = this.state.data;
    const amountPerPerson =
      (parseFloat(billAmount) + parseFloat(taxAmount)) / parseInt(personCount);
    alert(amountPerPerson);
  };

  render() {
    return (
      <React.Fragment>
        <SEO />
        <Layout>
          <div>Tip Calculator</div>
          <input
            onChange={this.handleInputChange}
            placeholder="Bill Amount (Before Tax)"
            type="number"
            name="billAmount"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Tax Amount"
            type="number"
            name="taxAmount"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="How Many people"
            name="personCount"
            type="number"
          />
          <button onClick={this.calculateAmount}>Calculate</button>
        </Layout>
      </React.Fragment>
    );
  }
}

export default TipCalc;
