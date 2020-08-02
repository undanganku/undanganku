import styled from "styled-components";

export const Wrapper = styled.div`
  /* border: solid 1px red; */
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 0 12px;
  }
`;
