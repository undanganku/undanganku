import React from "react";
import { Wrapper } from "./styles";
import LogoMaps from "../../img/love.png";

function index() {
  return (
    <Wrapper className="d-flex justify-content-center flex-column py-5">
      <div className="d-flex justify-content-center map-icon">
        <img width="100%" src={LogoMaps} alt="" />
      </div>
      <h1>Perum lestari indah, Menganti . Gresik</h1>
      <div>
        <div>
          <iframe
            title="lokasi-pernikahan"
            width="100%"
            height="100%"
            // height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=perum%20lestari%20indah%20meganti%20gresik&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
