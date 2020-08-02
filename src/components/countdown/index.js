import React from "react";
import { Wrapper, WrapperTime } from "./styles";
import Countdown from "react-countdown";

function index() {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="d-flex justify-content-center">
          <WrapperTime>
            <h2>{days}</h2>
            <span>days</span>
          </WrapperTime>
          <WrapperTime>
            <h2>{hours}</h2>
            <span>hours</span>
          </WrapperTime>
          <WrapperTime>
            <h2>{minutes}</h2>
            <span>minutes</span>
          </WrapperTime>
          <WrapperTime>
            <h2>{seconds}</h2>
            <span>seconds</span>
          </WrapperTime>
        </span>
      );
    }
  };

  return (
    <Wrapper>
      <h1>Akan Menikah</h1>
      <Countdown date={"2020-08-13"} renderer={renderer} />
      <h3 className="mt-4">Kamis, 13 Agustus 2020</h3>
      <div className="d-flex section-lokasi-acara justify-content-around">
        <div>
          <h5>Akad Nikah</h5>
          08.00 - 09:00
        </div>
        <div>
          <h5>Skukuran</h5>
          12.00 - 14:00
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
