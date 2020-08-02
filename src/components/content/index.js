import React from "react";
import { Wrapper, Tittle } from "./styles";
import CountDown from "../countdown";
import Maps from "../maps";
import Heart from "../hearts";
import CardMempelai from "../card-mempelai";
import InstagramLive from "../instagram-live";
import Vino from "../../img/vino.jpeg";
import Syofi from "../../img/syofi.jpeg";

function index() {
  return (
    <Wrapper>
      <div className="section-mempelai">
        <div className="mempelai-pria">
          <Tittle>Vino</Tittle>
          <CardMempelai
            nama={"Vino Tanuwijaya, ST"}
            type={"Bin"}
            bapak={"Mugghi Tanuwijaya"}
            // ibu={"-"}
            img={Vino}
          />
        </div>
        <div className="lambang-cinta">
          <Heart></Heart>
        </div>
        <div className="mempelai-wanita">
          <Tittle>Syofi</Tittle>
          <CardMempelai
            type={"Binti "}
            bapak={"Prajogo Utomo"}
            nama={" Pradita  Cyntiawati Yoga"}
            // ibu={"-"}
            img={Syofi}
          />
        </div>
      </div>

      <CountDown />
      <InstagramLive />
      <Maps />
    </Wrapper>
  );
}

export default index;
