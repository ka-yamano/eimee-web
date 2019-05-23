import * as React from "react"
import styled, { keyframes } from "styled-components"
import media from "@/util/breakpoint";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const Background = styled.div`
  position: relative;
  width: 50%;
  height: 50vh;
  opacity: 0;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:nth-of-type(1) {
    background-image: url("/assets/img/ph_top1.jpg");
    animation: ${fadeIn} 1.5s ease 0.5s 1 forwards;

    ${media.lessThan("md")`
      width: 100%;
      height: 100vh;
    `}
  }

  &:nth-of-type(2) {
    background-image: url("/assets/img/ph_top2.jpg");
    background-position: left top;
    animation: ${fadeIn} 1.5s ease 1.0s 1 forwards;

    ${media.lessThan("md")`
      display: none;
    `}
  }

  &:nth-of-type(3) {
    background-image: url("/assets/img/ph_top3.jpg");
    animation: ${fadeIn} 1.5s ease 1.5s 1 forwards;

    ${media.lessThan("md")`
      display: none;
    `}
  }

  &:nth-of-type(4) {
    background-image: url("/assets/img/ph_top4.jpg");
    animation: ${fadeIn} 1.5s ease 2.0s 1 forwards;

    ${media.lessThan("md")`
      display: none;
    `}
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 50.75%;
  left: 50%;
  width: 400px;
  height: 95px;
  opacity: 0;
  background-image: url("/assets/img/logo_top.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 5s ease 2.5s 1 forwards;

  ${media.lessThan("md")`
    animation: ${fadeIn} 5s ease 1.5s 1 forwards;
  `}

  ${media.lessThan("sm")`
    width: 250px;
    height: 60px;
  `}
`;

const TopBackground = ({ className } : { className? : string }) => (
  <Wrapper classname={ className }>
    {
      Array.from(Array(4).keys()).map((i) => (
        <Background key={i} />
      ))
    }
    <Logo />
  </Wrapper>
)

export default TopBackground
