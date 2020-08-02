import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - 104px);
  /* border: dashed 1px orange; */
  background-color: #f8f9fa;

  .section-mempelai {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    /* border: solid 1px red; */
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 768px) {
      padding: 0 12px;
      flex-direction: column;
    }
  }

  .lambang-cinta {
    width: 20%;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 100px;
    }
  }
  .mempelai-pria {
    width: 40%;
    text-align: right;
    flex-direction: column;
    display: flex;
    align-items: flex-end;

    @media only screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
      align-items: center;
    }
  }
  .mempelai-wanita {
    width: 40%;
    text-align: left;
    flex-direction: column;
    display: flex;
    align-items: flex-start;

    @media only screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
      align-items: center;
    }
  }
`;

export const Tittle = styled.div`
  font-family: "Patrick Hand SC", cursive;
  font-size: 5rem;
  width: 300px;
  text-align: center;

  i {
    color: #d9628b;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProfilePic = styled.div`
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
  }
`;
