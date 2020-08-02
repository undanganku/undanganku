import React from "react";
import { Wrapper } from "./styles";

function index() {
  return (
    <Wrapper>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EjfX6HMGZH09pRnJiQOIf4kr9iOM9wlsKoUZ3-uWS308GMQ&s"
            }
            width="50"
            // height="30"
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
