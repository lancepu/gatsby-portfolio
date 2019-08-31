import React from "react";
import { Progress } from "antd";

const Proficiency = ({ percent, description, format }) => {
  return (
    <React.Fragment>
      <Progress
        type="circle"
        strokeColor={"var(--btnBg)"}
        width={60}
        percent={percent}
        format={() => format}
      />
      <p>{description}</p>
    </React.Fragment>
  );
};

export default Proficiency;
