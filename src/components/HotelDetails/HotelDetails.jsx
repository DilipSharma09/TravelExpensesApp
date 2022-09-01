import React from "react";
import { IconContext } from "react-icons";
import { MdOutlineLocationOn, MdOutlineThumbUpOffAlt } from "react-icons/md";
import RatePolicy from "../common/RatePolicy/RatePolicy";

const container = {
  display: "flex",
  columnGap: "8px",
};

const containerTwo = {
  display: "flex",
  flexDirection: "column",
};

const HotelDetails = ({ data }) => {
  const check_in = data.check_in.split(" ");
  const check_out = data.check_out.split(" ");
  const noOfRating = data.info[0].customerRating.numReviews;
  const rating = data.info[0].customerRating.rating;
  const hotelRateObj = {
    rate: data.info[0].selected_room.total,
    ratePerNight: data.info[0].selected_room.per_room_night_price,
    polciyType: "Outside Policy",
    details: "Cancellation Policy",
  };
  console.log("dataaaaa", data);

  return (
    <>
      <div style={container}>
        <div style={{ display: "flex", columnGap: "10px", flex: "4" }}>
          <img
            style={{ width: "107px", height: "77px" }}
            src={process.env.PUBLIC_URL + `images/Ramada.jpg`}
          />
          <div style={containerTwo}>
            <img
              style={{ height: "15px", width: "61px", marginBottom: "2px" }}
              src={process.env.PUBLIC_URL + `images/star.png`}
            />
            <span
              style={{
                alignSelf: "flex-start",
                fontWeight: "700",
                color: "#564c4c",
              }}
            >
              {data.info[0].name}
            </span>
            <div style={{ display: "flex" }}>
              <IconContext.Provider value={{ color: "red" }}>
                <div style={{ marginLeft: "-2px" }}>
                  <MdOutlineLocationOn />
                </div>
              </IconContext.Provider>
              <span style={{ color: "grey", fontSize: "smaller" }}>
                {data.location}
              </span>
            </div>
            <div
              style={{ display: "flex", fontSize: "small", marginTop: "-3px" }}
            >
              <span style={{ color: "grey", alignSelf: "flex-start" }}>
                {`${check_in[0]} ${check_in[1]} - ${check_out[0]} ${check_out[1]}`}
              </span>
              <span
                style={{
                  fontWeight: "900",
                  color: "grey",
                  margin: "-4px 10px 0px 10px",
                }}
              >
                .
              </span>
              <span style={{ color: "grey", alignSelf: "flex-start" }}>
                12 kms from searched location
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "grey",
            rowGap: "5px",
            flex: "1",
          }}
        >
          <div style={{ display: "flex" }}>
            <span style={{ fontWeight: "bold" }}>{`${rating}/5`}</span>&nbsp;
            <span>Rating</span>
          </div>
          <span
            style={{ alignSelf: "flex-start" }}
          >{`${noOfRating} Reviews`}</span>
        </div>
        <div style={{ flex: "1", marginRight: "-21px" }}>
          <RatePolicy data={hotelRateObj}></RatePolicy>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          columnGap: "20px",
          color: "grey",
          fontWeight: "500",
          fontSize: "small",
        }}
      >
        <div>
          <MdOutlineThumbUpOffAlt />
          &nbsp;
          <span>15+ Colleagues</span>
        </div>
        <span>Breakfast Included</span>
        <span>Itilite Fare</span>
        <span>GST Assured</span>
        <span style={{ color: "green" }}>Safe++ </span>
        <span style={{ color: "red" }}>Quality Unclear </span>
      </div>
    </>
  );
};

export default HotelDetails;
