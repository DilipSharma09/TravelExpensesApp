import React from "react";
import FlightDetails from "../FlightDetails/FlightDetails";
import HotelDetails from "../HotelDetails/HotelDetails";
import Rate from "../common/Rate/Rate";
import testData from "../../test.json";

const container = {
  display: "flex",
  border: "2px solid red",
  borderRadius: "10px",
  // width: "90%",
  // margin: "auto",
  padding: "20px",
  flexDirection: "column",
  rowGap: "15px",
};

const TravelList = () => {
  console.log("testData", testData);

  const flightData = testData.find((a) => a.type === "flight").data;
  const hotelData = testData.find((a) => a.type === "hotel").data;
  const reward = { label: "Your Reward", rate: "690", flexValue: 1 };
  const saving = { label: "Savings", rate: "1200", flexValue: 5 };
  const totalPrice = { label: "Total Price", rate: "8,478", flexValue: 1 };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div
        style={{
          background: "#e79a9a33",
          borderRadius: "5px",
          padding: "15px",
          display: "flex",
          margin: "10px 0px 20px 0px",
        }}
      >
        <span
          style={{
            alignSelf: "flex-start",
            fontWeight: "600",
            color: "#686666",
          }}
        >
          Your destination has higher number of reported covid-19 cases. Your
          health and safety comes first. Please follow government guidelines
          while traveliing.
        </span>
        &nbsp;
        <span style={{ color: "red", fontWeight: "800" }}>Learn More</span>
      </div>
      <div style={container}>
        <FlightDetails data={flightData}></FlightDetails>
        <HotelDetails data={hotelData}></HotelDetails>
        <div style={{ borderTop: "3px dotted #91858542" }}></div>
        <div style={{ display: "flex" }}>
          <Rate data={reward}></Rate>
          <Rate data={saving}></Rate>
          <Rate data={totalPrice}></Rate>
        </div>
      </div>
    </div>
  );
};

export default TravelList;
