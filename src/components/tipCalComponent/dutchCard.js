import React, { Component } from "react";
import UserCard from "./userCard";
import { Row, Col, Button, Card, Radio, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import CustomInputNumber from "./customInputNumber";
import { isNull } from "util";
import ResultCard from "./resultCard";

class DutchCard extends Component {
  state = {
    data: { subTotal: 0.0, taxAmount: 0.0, tip: 0.15 },
    billTotal: 0,
    usersTotal: 0,
    usersSubtotal: 0,
    tipTotal: 0,
    users: [],
    results: [],
    modalVisible: false,
  };

  handleInputChange = name => value => {
    const data = { ...this.state.data };
    isNull(value) ? (value = 0) : value;
    data[name] = value;
    this.setState({ data });
  };

  handleUserPriceChange = name => value => {
    const users = [...this.state.users];
    const updatedUsers = users.map(u => {
      if (u.userNumber == name) {
        u.currentItem = value;
        return u;
      }
      return u;
    });
    this.setState({ users: updatedUsers });
  };

  handleAddUser = () => {
    const { users } = this.state;
    const userNumber = users.length + 1;
    const user = {
      displayName: `Person ${userNumber}`,
      userNumber,
      items: [],
      currentItem: 0,
    };
    users.push(user);
    this.setState({ users });
  };

  handlePriceAdd = target => {
    const { userNumber } = target;
    const users = [...this.state.users];
    const updatedUsers = users.map(u => {
      if (u.userNumber == userNumber) {
        u.items.push(u.currentItem);
        u.currentItem = 0;
        return u;
      }
      return u;
    });
    this.setState({ users: updatedUsers });
  };

  handleUserDisplayNameChange = target => {
    const { e, userNumber } = target;
    const users = [...this.state.users];
    const updatedUsers = users.map(u => {
      if (u.userNumber == userNumber) {
        u.displayName = e.target.value;
        return u;
      }
      return u;
    });
    this.setState({ users: updatedUsers });
  };

  handleUserDelete = target => {
    const { userNumber } = target;
    const users = [...this.state.users];
    const updatedUsers = users.filter(u => u.userNumber != userNumber);
    this.setState({ users: updatedUsers });
  };

  handleTipChange = e => {
    const tip = e.target.value;
    const data = { ...this.state.data };
    data["tip"] = parseFloat(tip);
    this.setState({ data });
  };

  handleTagClose = target => {
    const { userNumber, item } = target;
    const users = [...this.state.users];
    // Lopp through each item of the array (users), if item satisfies the if condition, it will be updated, else, the item will be pushed to a new array (updatedUsers)
    const updatedUsers = users.map(u => {
      if (u.userNumber == userNumber) {
        const updatedItems = u.items.filter(i => i != item);
        return Object.assign({}, u, { items: updatedItems });
      }
      return u;
    });
    this.setState({ users: updatedUsers });
  };

  calculateAmount = () => {
    const { subTotal, taxAmount, tip } = this.state.data;
    const billTotal = subTotal + taxAmount + subTotal * tip;
    let usersTotal = 0;
    let tipTotal = 0;
    let usersSubtotal = 0;
    const users = [...this.state.users];
    const taxPercentage = taxAmount / subTotal;
    const results = users.map(u => {
      const userSubtotal = u.items.reduce((a, b) => a + b, 0);
      const userTaxAmount = userSubtotal * taxPercentage;
      const userTipAmount = userSubtotal * tip;
      const userGrandTotal = userSubtotal + userTaxAmount + userTipAmount;
      usersTotal += userGrandTotal;
      usersSubtotal += userSubtotal;
      tipTotal += userTipAmount;
      return {
        userNumber: u.userNumber,
        displayName: u.displayName,
        userSubtotal,
        userTaxAmount,
        userTipAmount,
        userGrandTotal,
      };
    });
    this.setState({
      results,
      billTotal,
      usersTotal,
      tipTotal,
      usersSubtotal,
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
    const results = [...this.state.results];
    let usersTotal = 0;
    let tipTotal = 0;
    const newResults = results.map(r => {
      const ceilGrandTotal = Math.ceil(r.userGrandTotal);
      const grandTotalDiff = ceilGrandTotal - r.userGrandTotal;
      const newTipAmount = r.userTipAmount + grandTotalDiff;
      usersTotal += ceilGrandTotal;
      tipTotal += newTipAmount;
      return {
        displayName: r.displayName,
        userNumber: r.userNumber,
        userSubtotal: r.userSubtotal,
        userTaxAmount: r.userTaxAmount,
        userTipAmount: newTipAmount,
        userGrandTotal: ceilGrandTotal,
      };
    });

    this.setState({ results: newResults, usersTotal, tipTotal });
  };

  render() {
    const { subTotal, taxAmount, tip } = this.state.data;
    const {
      modalVisible,
      results,
      billTotal,
      tipTotal,
      usersSubtotal,
      usersTotal,
    } = this.state;
    let billColor = "";
    usersTotal < billTotal ? (billColor = "red") : (billColor = "green");
    return (
      <React.Fragment>
        <Modal
          title={
            <Row>
              <Col span={24}>Result</Col>
              <Col span={24}>{`Subtotal Total: $${subTotal}`}</Col>
              <Col span={24}>{`Tax Total: $${taxAmount}`}</Col>
              <Col span={24}>{`Tip Total: $${tipTotal.toFixed(2)}`}</Col>
              <hr />
              <Col span={24}>{`Bill Total: $${billTotal.toFixed(2)}`}</Col>
              <Col
                span={24}
                style={{ color: billColor }}
              >{`People Total: $${usersTotal.toFixed(2)}`}</Col>
            </Row>
          }
          visible={modalVisible}
          onOk={this.handleWholeNumber}
          okText="Whole Number"
          onCancel={this.handleModalCancel}
          cancelText="Close"
          closable={false}
        >
          {usersTotal < billTotal ? (
            <p style={{ color: "red" }}>
              Looks like the user total doesn't add up to bill amount, please
              double check!
            </p>
          ) : null}
          {usersSubtotal > subTotal ? (
            <p style={{ color: "red" }}>
              Looks like the user subTotal is more than the bill subtotal,
              please double check!
            </p>
          ) : null}
          {results.map(o => (
            <ResultCard obj={o} />
          ))}
        </Modal>
        <Card
          title={
            <Row>
              <Col span={24}>Going Dutch</Col>
              <Col span={24}>
                <Card.Meta description="Each person pay for what they ordered" />
              </Col>
            </Row>
          }
          style={{ maxWidth: "400px" }}
        >
          <Row>
            <Col span={24}>Tip Amount</Col>
            <Col span={24}>
              <Radio.Group
                defaultValue={tip}
                buttonStyle="solid"
                onChange={this.handleTipChange}
                style={{ marginBottom: "20px" }}
              >
                <Radio.Button value={0}>0%</Radio.Button>
                <Radio.Button value={0.15}>15%</Radio.Button>
                <Radio.Button value={0.18}>18%</Radio.Button>
                <Radio.Button value={0.2}>20%</Radio.Button>
                <Radio.Button value={0.25}>25%</Radio.Button>
                <Radio.Button value={0.3}>30%</Radio.Button>
              </Radio.Group>
            </Col>
            <Col span={24}>
              <CustomInputNumber
                label={"Sub Total"}
                name={"subTotal"}
                handleInputChange={this.handleInputChange}
                value={subTotal}
                minValue={0}
                precision={2}
              />
              <CustomInputNumber
                label={"Tax Amount"}
                name={"taxAmount"}
                handleInputChange={this.handleInputChange}
                value={taxAmount}
                minValue={0}
                precision={2}
              />
            </Col>
            <Col style={{ marginBottom: "20px" }} span={24}>
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                onClick={this.handleAddUser}
              >
                Add Person
              </Button>
            </Col>
            <Col span={24}>
              <Button type="primary" onClick={this.calculateAmount}>
                Calculate
              </Button>
            </Col>
          </Row>
        </Card>
        <Row>
          <Col>
            {this.state.users.map(u => (
              <UserCard
                key={u.userNumber}
                displayName={u.displayName}
                userNumber={u.userNumber}
                currentItem={u.currentItem}
                items={u.items}
                handleTagClose={this.handleTagClose}
                handleDeleteUser={this.handleUserDelete}
                handlePriceAdd={this.handlePriceAdd}
                handleInputChange={this.handleUserPriceChange}
                handleUserDisplayNameChange={this.handleUserDisplayNameChange}
              />
            ))}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default DutchCard;
