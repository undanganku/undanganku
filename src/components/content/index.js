import React from "react";
import { Wrapper, Tittle } from "./styles";
import CountDown from "../countdown";
import Maps from "../maps";

function index() {
  return (
    <Wrapper>
      <div className="d-flex justify-content-center">
        <div className="col-5 text-right">
          <Tittle>Laki - Laki</Tittle>
        </div>
        <div className="col-1">
          <Tittle>
            {" "}
            <i className="fas fa-heart"></i>{" "}
          </Tittle>
        </div>

        <div className="col-5 text-left">
          <Tittle>Perempuan</Tittle>
        </div>
      </div>
      <CountDown />
      <Maps />
    </Wrapper>
  );
}

export default index;
