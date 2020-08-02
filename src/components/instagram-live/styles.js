import styled from "styled-components";

export const Wrapper = styled.div`
  /* border: solid 1px red; */
  /* max-width: 700px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 12px;

  .instagram-icon {
    width: 150px;
    height: 150px;
  }

  .link-instagram-mempelai {
    width: 50%;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #d9628b;
  }

  @media only screen and (max-width: 768px) {
    .instagram-icon {
      width: 75px;
      height: 75px;
    }

    .link-instagram-mempelai {
      width: 100%;
    }
  }
`;
