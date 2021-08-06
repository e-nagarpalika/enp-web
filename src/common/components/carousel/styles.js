/** @format */

import styled from "styled-components";

export const Image = styled.img`
  //align-self: center;
  //margin-top: 20px;
  width: auto;
  height: 200px;
  //border-radius: 10px;
  object-fit: cover;
`;
export const P = styled.p`
  height: 100px;
  overflow: auto;
  font-style: italic;
`;

export const Div = styled.div`
  height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const I = styled.i`
  color: rgb(103, 112, 150);
  font-size: 40px;
`;

export const ControlNext = styled.a`
  width: 5%;
  right: -5%;
`;

export const ControlPrev = styled.a`
  width: 5%;
  left: -5%;
`;

export const CardHead = styled.div`
  border-radius: 10px;
  //background: linear-gradient(to right, #bb7f52, #6c153d);
  //color: white;
  margin-top: 20px;
  //max-width: 400px;
  //max-height: 400px;
  margin-left: 5px;
`;
