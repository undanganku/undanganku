import React from "react";
import { Wrapper } from "./styles";
import LogoIg from "../../img/instagram-logo-pink.png";

function index() {
  return (
    <Wrapper>
      <div className="instagram-icon">
        <img width="100%" src={LogoIg} alt="" />
      </div>
      <h1>Instagram Live</h1>
      <h4>Kalian juga bisa menyaksikan akad kami secara langsung</h4>
      <div className="d-flex justify-content-around link-instagram-mempelai">
        {/* <a
          href="https://www.instagram.com/pradetasukmarangga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5>@mempelaipria</h5>
        </a> */}
        <a
          href="https://www.instagram.com/cyntiayoga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5>@cyntiayoga</h5>
        </a>
      </div>
    </Wrapper>
  );
}

export default index;
