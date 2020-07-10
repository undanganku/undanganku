import React from "react";
import { Wrapper } from "./styles";

function index() {
  return (
    <Wrapper className="d-flex justify-content-center flex-column">
      <h1>Google Maps</h1>
      <div>
        <div>
          <iframe
            title="lokasi-pernikahan"
            width="100%"
            height="100%"
            // height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=alamanda%20tower&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
