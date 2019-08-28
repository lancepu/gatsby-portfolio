import React, { Component } from "react";
import { Card, Row, Col, Tag, Button, InputNumber } from "antd";
import CustomInputNumber from "./customInputNumber";

const UserCard = ({
  userNumber,
  items,
  handleTagClose,
  handleDeleteUser,
  handlePriceAdd,
  handleInputChange,
}) => {
  return (
    <Card
      title={
        <Row>
          <Col span={2}>
            <Button
              type="danger"
              shape="circle"
              icon="minus"
              onClick={() => handleDeleteUser({ userNumber })}
            />
          </Col>
          <Col span={8}>{`Person ${userNumber}`}</Col>
          <Col span={10}>
            <InputNumber
              onBlur={handleInputChange}
              onFocus={e => e.target.select()}
            />
          </Col>
          <Col span={2}>
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              onClick={() => handlePriceAdd({ userNumber })}
            />
          </Col>
        </Row>
      }
      style={{ minWidth: "400px", margin: "5px 15px" }}
    >
      {items.map(i => (
        <Tag
          key={i}
          closable
          onClose={() => handleTagClose({ userNumber, item: i })}
        >
          {i}
        </Tag>
      ))}
    </Card>
  );
};

export default UserCard;
