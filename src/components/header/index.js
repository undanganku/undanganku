import React from "react";
import { Wrapper } from "./styles";

function index() {
  return (
    <Wrapper>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          <img
            src="/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Wedding Invitation
        </div>
      </nav>
    </Wrapper>
  );
}

export default index;
