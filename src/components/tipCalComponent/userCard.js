import React from "react";
import { Card, Row, Col, Tag, Button, InputNumber, Input } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

const UserCard = ({
  displayName,
  userNumber,
  items,
  currentItem,
  handleTagClose,
  handleDeleteUser,
  handlePriceAdd,
  handleInputChange,
  handleUserDisplayNameChange,
}) => {
  return (
    <Card
      title={
        <Row type="flex" justify="center">
          <Col span={2}>
            <Button
              type="danger"
              shape="circle"
              icon={<MinusCircleOutlined />}
              onClick={() => handleDeleteUser({ userNumber })}
            />
          </Col>
          <Col span={8}>
            <Input
              value={displayName}
              onChange={e => handleUserDisplayNameChange({ e, userNumber })}
            />
          </Col>
          <Col span={10}>
            <InputNumber
              onChange={handleInputChange(userNumber)}
              value={currentItem}
              onFocus={e => e.target.select()}
              min={0}
              precision={2}
            />
          </Col>
          <Col span={2}>
            <Button
              type="primary"
              shape="circle"
              icon={<PlusCircleOutlined />}
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
