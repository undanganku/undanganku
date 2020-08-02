import React from "react";
import { Wrapper } from "./styles";

function index() {
  return (
    <Wrapper>
      <div className="world">
        <div className="box">
          <div className="shape1">
            <div className="heart"></div>
          </div>
        </div>
        <div className="box2">
          <div className="shape2">
            <div className="heart2"></div>
          </div>
        </div>
        {/* <div className="box">
          <div className="shape3">
            <div className="heart"></div>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
}

export default index;
