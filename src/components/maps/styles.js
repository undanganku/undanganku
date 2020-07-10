import styled from "styled-components";

export const Wrapper = styled.div`
  iframe {
    width: 650px;
    height: 500px;
  }

  @media (max-width: 1440px) {
    iframe {
      width: 48.667vw;
      height: 34.722vw;
    }
  }

  @media (max-width: 768px) {
    iframe {
      width: 100%;
      height: 400px;
    }
  }
`;
