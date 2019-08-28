import React, { Component } from "react";
import { Row, Col, Button, Card, Radio } from "antd";
import CustomInputNumber from "./customInputNumber";
import { isNull } from "util";

class EvenCard extends Component {
  state = { data: { subTotal: 0, taxAmount: 0, personCount: 1, tip: 0.15 } };

  handleInputChange = name => value => {
    const data = { ...this.state.data };
    isNull(value) ? (value = 0) : value;
    data[name] = value;
    this.setState({ data }, () => {
      console.log(this.state.data);
    });
  };

  handleTipChange = e => {
    const tip = e.target.value;
    const data = { ...this.state.data };
    data["tip"] = parseFloat(tip);
    this.setState({ data }, () => {
      console.log(this.state.data);
    });
  };

  calculateAmount = () => {
    const { subTotal, taxAmount, personCount, tip } = this.state.data;
    const amountPerPerson =
      (parseFloat(subTotal) +
        parseFloat(taxAmount) +
        parseFloat(subTotal) * tip) /
      parseInt(personCount);
    alert(amountPerPerson.toFixed(2));
  };

  // a function to round up to the nearest whole number for each person, eg, if each person is 10.35, round up to 11, the round up amount will all be added to tips

  render() {
    const { subTotal, taxAmount, personCount, tip } = this.state.data;
    return (
      <Card
        title="Split Evenly"
        style={{ minWidth: "400px", margin: "0 15px" }}
      >
        <Row>
          <Col>Tip Amount</Col>
          <Radio.Group
            defaultValue={tip}
            buttonStyle="solid"
            onChange={this.handleTipChange}
            style={{ marginBottom: "20px" }}
          >
            <Radio.Button value={0.15}>15%</Radio.Button>
            <Radio.Button value={0.18}>18%</Radio.Button>
            <Radio.Button value={0.2}>20%</Radio.Button>
            <Radio.Button value={0.25}>25%</Radio.Button>
            <Radio.Button value={0.3}>30%</Radio.Button>
          </Radio.Group>
          <Col style={{ margin: "10px" }}>
            <CustomInputNumber
              label={"Sub Total"}
              name={"subTotal"}
              handleInputChange={this.handleInputChange}
              value={subTotal}
              minValue={0}
            />
            <CustomInputNumber
              label={"Tax Amount"}
              name={"taxAmount"}
              handleInputChange={this.handleInputChange}
              value={taxAmount}
              minValue={0}
            />
            <CustomInputNumber
              label={"Number of People"}
              name={"personCount"}
              handleInputChange={this.handleInputChange}
              value={personCount}
              minValue={1}
            />
          </Col>
          <Col style={{ margin: "10px" }}>
            <Button type="primary" onClick={this.calculateAmount}>
              Calculate
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default EvenCard;
