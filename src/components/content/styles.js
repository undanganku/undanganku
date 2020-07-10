import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - 104px);
  border: dashed 1px orange;
  background-color: #f8f9fa;
`;

export const Tittle = styled.div`
  font-family: "Patrick Hand SC", cursive;
  font-size: 5rem;

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
