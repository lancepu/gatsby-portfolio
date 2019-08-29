import React from "react";
import { Card, Row, Col, Tag, Button, InputNumber } from "antd";

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
        <Row type="flex" justify="center">
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
              onChange={handleInputChange(userNumber)}
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
      style={{ marginTop: "10px", minWidth: "370px" }}
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
