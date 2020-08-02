import styled from "styled-components";

export const Wrapper = styled.div`
  /* border: solid 1px red; */
  min-width: 300px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const FotoMempelai = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: overlay;

  img {
    object-fit: cover;
  }
`;
