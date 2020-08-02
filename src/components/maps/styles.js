import styled from "styled-components";

export const Wrapper = styled.div`
  iframe {
    width: 650px;
    height: 500px;
  }

  .map-icon img {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 1440px) {
    iframe {
      width: 48.667vw;
      height: 34.722vw;
    }
  }

  @media (max-width: 768px) {
    padding: 0 12px;

    .map-icon img {
      width: 75px;
      height: 75px;
    }

    iframe {
      width: 100%;
      height: 400px;
    }
  }
`;
