import React from "react";
import { Wrapper, FotoMempelai } from "./styles";

function index({ img, type, bapak, ibu, nama }) {
  return (
    <Wrapper>
      <FotoMempelai>
        <img width="100%" height="100%" src={img} alt="mempelai" />
      </FotoMempelai>
      <h3>{nama}</h3>
      <h5>{type} dari</h5>
      <p>
        Bapak {bapak} dan Ibu {ibu}
      </p>
    </Wrapper>
  );
}

export default index;
