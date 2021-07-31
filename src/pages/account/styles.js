/** @format */

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 115px);
  @media (max-width: 775px) {
    margin-top: 90px;
    margin-bottom: 80px;
  }
`;

export const Card = styled.div`
  width: 70%;
`;

export const FormRow = styled.div`
  padding: 6px;
`;
