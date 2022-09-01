import React from "react";
import FlightNameTime from "../common/FlightNameTime/FlightNameTime";
import RatePolicy from "../common/RatePolicy/RatePolicy";
import { FaRegUser } from "react-icons/fa";

const container = {
  display: "flex",
  columnGap: "150px",
};

const months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const FlightDetails = ({ data }) => {
  const flightNameObj = {
    data1: "airIndia.png",
    data2: data.flights[0].carrier_name,
    data3: data.flights[0].carrier_id,
    data4: data.class,
  };

  console.log("tttt", data.flights[0].departure_date_time);
  const deptMonth =
    months[
      Number(data.flights[0].departure_date_time.split(" ")[0].split("-")[1]) +
        1
    ];
  const deptTimeObj = {
    data1: "",
    data2: data.flights[0].departure_date_time.split(" ")[1],
    data3: data.flights[0].from,
    data4: `${
      data.flights[0].departure_date_time.split(" ")[0].split("-")[0]
    } ${deptMonth}`,
    hrs: true,
  };

  const arrMonth =
    months[
      Number(data.flights[0].arrival_date_time.split(" ")[0].split("-")[1]) + 1
    ];
  const arrTimeObj = {
    data1: "",
    data2: data.flights[0].arrival_date_time.split(" ")[1],
    data3: data.flights[0].to,
    data4: `${
      data.flights[0].arrival_date_time.split(" ")[0].split("-")[0]
    } ${arrMonth}`,
    hrs: true,
  };

  const FlightRateObj = {
    rate: data.final_amount,
    polciyType: "Outside Policy",
    details: "Flight Details",
  };

  return (
    <>
      <div style={container}>
        <FlightNameTime data={flightNameObj}></FlightNameTime>
        <FlightNameTime data={deptTimeObj}></FlightNameTime>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "grey", fontSize: "small" }}>
            {data.total_duration}
          </span>
          <span
            style={{
              border: "1px solid #8080803d",
              width: "155px",
              margin: "8px 0px 8px 0px",
            }}
          ></span>
          <span style={{ color: "grey", fontSize: "small" }}>Non Stop</span>
        </div>
        <FlightNameTime data={arrTimeObj}></FlightNameTime>
        <RatePolicy data={FlightRateObj}></RatePolicy>
      </div>
      <div
        style={{
          display: "flex",
          columnGap: "20px",
          color: "grey",
          fontWeight: "500",
          fontSize: "small",
          marginBottom: "18px",
        }}
      >
        <div>
          <FaRegUser />
          &nbsp;
          <span>3 Colleagues on flight</span>
        </div>
        <span>Early Departure</span>
        <span>Cheapest Flight</span>
        <span>Corporate Fare</span>
        <span>Cabin Baggage Only</span>
      </div>
    </>
  );
};

export default FlightDetails;
