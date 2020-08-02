import styled from "styled-components";

export const Wrapper = styled.div`
  /* border: solid 1px red; */
  width: 100%;
  display: flex;
  justify-content: center;

  .world {
    /* position: absolute; */
    /* top: 160px; */
  }

  .box {
    /* position: absolute;
    top: 160px;
    left: 10px;
    right: 0;
    bottom: 0; */
    width: 100px;
    height: 100px;
    animation: rotate 5s ease-in-out infinite;
    transform-style: preserve-3d;
  }

  .box2 {
    /* position: absolute;
    top: 160px;
    left: 0;
    right: 10px;
    bottom: 0; */
    width: 100px;
    height: 100px;
    animation: rotate 5s ease-in-out infinite;
    transform-style: preserve-3d;
  }

  .box:nth-of-type(1) {
    animation-delay: -4s;
    left: -50px;
  }
  .box2:nth-of-type(1) {
    animation-delay: -2s;
    left: -50px;
  }
  /* .box:nth-of-type(3) {
    animation-delay: -3s;
    left: 0px;
  } */

  .shape1,
  .shape2 {
    position: absolute;
    opacity: 0.8;
  }

  .shape2 {
    transform: rotateY(90deg);
  }

  .heart {
    background-color: #d9628b;
    height: 50px;
    width: 50px;
    transform: rotate(-50deg);
  }
  .heart::before {
    background-color: #d9628b;
    border-radius: 100%;
    height: 50px;
    width: 50px;
    transform: rotate(-50deg);
    top: -25px;
    left: 0;
    position: absolute;
  }
  .heart::after {
    background-color: #d9628b;
    position: absolute;
    content: "";
    border-radius: 100%;
    height: 50px;
    width: 50px;
    transform: rotate(-50deg);
    top: 0;
    left: 25px;
  }

  .heart2 {
    background-color: #d9628b;
    height: 50px;
    width: 50px;
    transform: rotate(360deg);
  }
  .heart2::before {
    background-color: #d9628b;
    content: "";
    border-radius: 100%;
    height: 50px;
    width: 50px;
    transform: rotate(90deg);
    top: -25px;
    left: 0;
    position: absolute;
  }
  .heart2::after {
    background-color: #d9628b;
    position: absolute;
    content: "";
    border-radius: 100%;
    height: 50px;
    width: 50px;
    transform: rotate(90deg);
    top: 0;
    left: 25px;
  }

  @keyframes rotate {
    0% {
      transform: rotateY(0deg) rotateZ(25deg) translateY(50px);
    }
    50% {
      transform: rotateY(270deg) rotateZ(25deg) translateY(-50px);
    }
    100% {
      transform: rotateY(360deg) rotateZ(25deg) translateY(50px);
    }
  }

  @keyframes rotate2 {
    0% {
      transform: rotateY(0deg) rotateZ(25deg) translateY(-75px);
    }
    50% {
      transform: rotateY(270deg) rotateZ(25deg) translateY(50px);
    }
    100% {
      transform: rotateY(360deg) rotateZ(25deg) translateY(-75px);
    }
  }
`;
