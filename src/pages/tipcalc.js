import React, { Component } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { Radio } from "antd";
import EvenCard from "../components/tipCalComponent/evenCard";
import DutchCard from "../components/tipCalComponent/dutchCard";

class TipCalc extends Component {
  state = { mode: "even" };

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <React.Fragment>
        <SEO />
        <Layout>
          <h2>Tip Calculator</h2>
          <Radio.Group
            defaultValue="even"
            buttonStyle="solid"
            onChange={this.handleModeChange}
            style={{ marginBottom: "20px" }}
          >
            <Radio.Button value="even">Split Evenly</Radio.Button>
            <Radio.Button value="dutch">Going Dutch</Radio.Button>
          </Radio.Group>
          {mode == "even" ? <EvenCard /> : <DutchCard />}
        </Layout>
      </React.Fragment>
    );
  }
}

export default TipCalc;
