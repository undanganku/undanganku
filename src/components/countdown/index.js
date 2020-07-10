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
      <h1>Don't Miss It!</h1>
      <Countdown date={"2020-07-11"} renderer={renderer}></Countdown>
    </Wrapper>
  );
}

export default index;
