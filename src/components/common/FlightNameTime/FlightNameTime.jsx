import React from "react";

const container = {
  display: "flex",
  columnGap: "8px",
};

const containerTwo = {
  display: "flex",
  flexDirection: "column",
};

const FlightNameTime = ({ data }) => {
  const { data1, data2, data3, data4, hrs } = data;
  return (
    <div style={container}>
      {data1 && (
        <img
          style={{ width: "50px", height: "53px" }}
          src={process.env.PUBLIC_URL + `images/${data1}`}
        />
      )}
      <div style={containerTwo}>
        <div style={{ display: "flex" }}>
          <span style={{ fontWeight: "bold", alignSelf: "flex-start" }}>
            {data2}
          </span>
          &nbsp;
          <span style={{ color: "grey", fontSize: "small" }}>
            {hrs && "hrs"}
          </span>
        </div>
        <span style={{ color: "grey", alignSelf: "flex-start" }}>{data3}</span>
        <span style={{ color: "grey", alignSelf: "flex-start" }}>{data4}</span>
      </div>
    </div>
  );
};

export default FlightNameTime;
