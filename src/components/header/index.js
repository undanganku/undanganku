import React from "react";
import { Wrapper } from "./styles";
import Amplop from "../../img/undanganku.png";

function index() {
  return (
    <Wrapper>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          <img
            src={Amplop}
            width="50"
            // height="30"
            class="d-inline-block align-top mr-3"
            alt=""
          />
          Wedding Invitation
        </div>
      </nav>
    </Wrapper>
  );
}

export default index;
