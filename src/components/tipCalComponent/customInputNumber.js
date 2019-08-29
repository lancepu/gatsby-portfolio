import React from "react";
import { InputNumber, Row, Col } from "antd";

const CustomInputNumber = ({
  label,
  name,
  handleInputChange,
  minValue,
  value,
}) => {
  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px 0",
      }}
    >
      <Col span={12}>{label}</Col>
      <Col span={12}>
        <InputNumber
          onChange={handleInputChange(name)}
          value={value}
          min={minValue}
          onFocus={e => e.target.select()}
        />
      </Col>
    </Row>
  );
};

export default CustomInputNumber;
