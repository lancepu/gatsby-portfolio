import React, { Component } from "react";
import UserCard from "./userCard";
import { Row, Col, Button, Card, Radio } from "antd";
import CustomInputNumber from "./customInputNumber";
import { object } from "prop-types";

class DutchCard extends Component {
  state = {
    data: { subTotal: 0, taxAmount: 0, tip: 0.15 },
    users: [],
  };

  handleInputChange = name => value => {
    const data = { ...this.state.data };
    isNull(value) ? (value = 0) : value;
    data[name] = value;
    this.setState({ data }, () => {
      console.log(this.state.data);
    });
  };

  handleAddUser = () => {
    const { users } = this.state;
    const userNumber = users.length + 1;
    const user = {
      userNumber,
      items: ["test1", "test2"],
    };
    users.push(user);
    this.setState({ users }, () => {
      console.log(this.state.users);
    });
  };

  handlePriceAdd = target => {
    console.log(target);
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
    this.setState({ data }, () => {
      console.log(this.state.data);
    });
  };

  handleInputChange = ({ target }) => {
    console.log(target);
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
    const { subTotal, taxAmount, personCount, tip } = this.state.data;
  };

  render() {
    const { subTotal, taxAmount, tip } = this.state.data;
    return (
      <React.Fragment>
        <Card
          title={
            <Row>
              <Col>Going Dutch</Col>
              <Col>
                <Card.Meta description="Each person pay for what they ordered" />
              </Col>
            </Row>
          }
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
            </Col>

            <Button
              type="primary"
              shape="circle"
              icon="plus"
              onClick={this.handleAddUser}
            />

            <Col style={{ margin: "10px" }}>
              <Button type="primary" onClick={this.calculateAmount}>
                Calculate
              </Button>
            </Col>
          </Row>
        </Card>
        <Row>
          {this.state.users.map(u => (
            <UserCard
              key={u.userNumber}
              userNumber={u.userNumber}
              items={u.items}
              handleTagClose={this.handleTagClose}
              handleDeleteUser={this.handleUserDelete}
              handlePriceAdd={this.handlePriceAdd}
              handleInputChange={this.handleInputChange}
            />
          ))}
        </Row>
      </React.Fragment>
    );
  }
}

export default DutchCard;
