import React from "react";
import { Card, Row, Col } from "antd";

const ResultCard = ({ obj }) => {
  return (
    <Card>
      <Row>
        <Col span={24}>{obj.displayName}</Col>
        <Col span={24}>{`Sub Total: $${obj.userSubtotal.toFixed(2)}`}</Col>
        <Col span={24}>{`Tax: $${obj.userTaxAmount.toFixed(2)}`}</Col>
        <Col span={24}>{`Tip: $${obj.userTipAmount.toFixed(2)}`}</Col>
        <Col span={24}>{`Person Grand Total: $${obj.userGrandTotal.toFixed(
          2,
        )}`}</Col>
      </Row>
    </Card>
  );
};

export default ResultCard;
