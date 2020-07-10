import styled from "styled-components";

export const Wrapper = styled.div`
  h1 {
    font-family: "Patrick Hand SC", cursive;
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
`;
