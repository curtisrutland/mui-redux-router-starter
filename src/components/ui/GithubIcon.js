import React from 'react';
import * as githubSvg from "../../assets/github.svg";

export default ({size = 24}) => (
  <img src={githubSvg} style={{width: size}} alt="Github Icon" />
);