import React, { Component } from "react";
import { Row, Col, Button, Card, Radio, Modal } from "antd";
import CustomInputNumber from "./customInputNumber";
import { isNull } from "util";

class EvenCard extends Component {
  state = {
    data: {
      subTotal: 0,
      taxAmount: 0,
      personCount: 1,
      tip: 0.15,
      tipAmount: 0,
      grandTotal: 0,
    },
    result: 0,
    billTotal: 0,
    modalVisible: false,
  };

  handleInputChange = name => value => {
    const data = { ...this.state.data };
    isNull(value) ? (value = 0) : value;
    data[name] = parseFloat(value);
    this.setState({ data });
  };

  handleTipChange = e => {
    const tip = e.target.value;
    const data = { ...this.state.data };
    data["tip"] = parseFloat(tip);
    this.setState({ data });
  };

  calculateAmount = () => {
    const data = { ...this.state.data };
    data.tipAmount = data.subTotal * data.tip;
    const billTotal = data.subTotal + data.taxAmount + data.tipAmount;
    data.grandTotal = billTotal;
    const amountPerPerson = billTotal / data.personCount;
    this.setState({
      result: amountPerPerson,
      data,
      billTotal,
      modalVisible: true,
    });
  };

  // Modal to display result
  handleModalCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };

  handleWholeNumber = () => {
    // Round up the grandtotal of each user to the nearest whole number, the difference will be added to tip amount
    const data = { ...this.state.data };
    const result = this.state.result;
    const perPersonWhole = Math.ceil(result);
    const resultDiff = perPersonWhole - result;
    const newTipAmount = data.tipAmount + resultDiff * data.personCount;
    const newGrandTotal = perPersonWhole * data.personCount;
    data.grandTotal = newGrandTotal;
    data.tipAmount = newTipAmount;
    this.setState({ data, result: perPersonWhole });
  };

  render() {
    const {
      subTotal,
      taxAmount,
      personCount,
      tip,
      tipAmount,
      grandTotal,
    } = this.state.data;
    const { billTotal, result, modalVisible } = this.state;
    return (
      <React.Fragment>
        <Modal
          title={
            <Row>
              <Col span={8}>Result</Col>
              <Col span={8}>{`Bill Total: $${billTotal.toFixed(2)}`}</Col>
              <Col span={8}>{`Grand Total: $${grandTotal.toFixed(2)}`}</Col>
            </Row>
          }
          visible={modalVisible}
          onOk={this.handleWholeNumber}
          okText="Whole Number"
          onCancel={this.handleModalCancel}
          cancelText="Close"
          closable={false}
        >
          <Row>
            <Col span={24}>{`Sub Total: $${subTotal.toFixed(2)}`}</Col>
            <Col span={24}>{`Tax: $${taxAmount.toFixed(2)}`}</Col>
            <Col span={24}>{`Tip: $${tipAmount.toFixed(2)}`}</Col>
            <Col span={24}>{`Amount Per Person: $${result.toFixed(2)}`}</Col>
          </Row>
        </Modal>

        <Card title="Split Evenly">
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
            <Col>
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
            <Col style={{ marginTop: "20px" }}>
              <Button type="primary" onClick={this.calculateAmount}>
                Calculate
              </Button>
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}

export default EvenCard;
