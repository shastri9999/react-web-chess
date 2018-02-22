// @flow
import type { ComponentType } from "react";
import styled from "styled-components";
import type { SquareProps } from "./index";

export const Square: ComponentType<SquareProps> = styled.div`
  background-color: ${props => props.color};
  height: ${props => props.size};
  width: ${props => props.size};
`;
