import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  margin: 20px 0;

  h1 {
    font-family: "Patrick Hand SC", cursive;
  }

  .section-lokasi-acara {
    width: 50%;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 12px;
    margin: 10px 0;

    .section-lokasi-acara {
      width: 100%;
    }
  }
`;

export const WrapperTime = styled.div`
  border: solid 1px red;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 12px;
  background-color: #d9628b;
  color: #fff;
  flex-direction: column;
  font-family: "Patrick Hand SC", cursive;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    letter-spacing: 4px;
  }

  span {
    /* font-size: */
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    width: 65px;
    height: 65px;
    margin: 0 4px;

    h2 {
      font-size: 1.8rem;
      letter-spacing: 4px;
    }

    span {
      font-size: 10px;
      text-transform: uppercase;
    }
  }
`;
