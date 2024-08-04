import React from "react";
import { BouncingLoaderDot, BouncingLoaderWrapper } from "./bouncing.style";

const BouncingDotsLoader = (props) => {
  return (
    <>
      <BouncingLoaderWrapper>
        <BouncingLoaderDot />
        <BouncingLoaderDot />
        <BouncingLoaderDot />
      </BouncingLoaderWrapper>
    </>
  );
};

export default BouncingDotsLoader;
