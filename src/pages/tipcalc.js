import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { InputNumber, Button } from "antd";

class TipCalc extends Component {
  state = { data: {}, result: {} };

  handleInputChange = name => value => {
    const data = { ...this.state.data };
    console.log(value);
    console.log(name);
    // const { value, name } = input;
    value < 0 ? value == 0 : value
    data[name] = value;
    this.setState({ data }, () => {
      console.log(this.state.data);
    });
  };ß

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
          <InputNumber
            onChange={this.handleInputChange("billAmount")}
            formatter={value =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={value => value.replace(/\$\s?|(,*)/g, "")}
            min={0}
          />
          <InputNumber
            onChange={this.handleInputChange("taxAmount")}
            formatter={value =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={value => value.replace(/\$\s?|(,*)/g, "")}
            min={0}
          />
          <InputNumber
            onChange={this.handleInputChange("personCount")}
            defaultValue={1}
            min={1}
          />
          <Button type="primary" onClick={this.calculateAmount}>Calculate</Button>
          
        </Layout>
      </React.Fragment>
    );
  }
}

export default TipCalc;
