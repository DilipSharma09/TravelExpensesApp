import React from "react";

const container = {
  display: "flex",
  flexDirection: "column",
};

const RatePolicy = ({ data }) => {
  console.log("data", data);
  const { rate, ratePerNight, polciyType, details } = data;
  return (
    <div style={container}>
      <span
        style={{
          color: "#564a4",
          alignSelf: "flex-start",
          fontWeight: "700",
          fontSize: "large",
        }}
      >
        {rate} INR
      </span>
      {ratePerNight && (
        <span
          style={{ color: "grey", alignSelf: "flex-start", fontSize: "small" }}
        >
          {ratePerNight} per night
        </span>
      )}
      <span style={{ color: "red", alignSelf: "flex-start" }}>
        {polciyType}
      </span>
      <span style={{ color: "blue", alignSelf: "flex-start" }}>{details}</span>
    </div>
  );
};

export default RatePolicy;
