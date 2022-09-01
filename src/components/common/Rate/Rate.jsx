import React from "react";

const Rate = (props) => {
  const { label, rate, flexValue } = props.data;
  console.log("props.data", flexValue);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: flexValue }}>
      <span
        style={{
          alignSelf: "flex-start",
          fontWeight: "500",
          color: "grey",
          fontSize: "small",
        }}
      >
        {label}
      </span>
      <span
        style={{
          alignSelf: "flex-start",
          fontSize: "larger",
          fontWeight: "bolder",
        }}
      >
        {rate} INR
      </span>
    </div>
  );
};

export default Rate;
