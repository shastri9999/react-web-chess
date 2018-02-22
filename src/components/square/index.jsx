// @flow
import * as React from "react";
import * as style from "./style";

export type SquareProps = {
  color: string,
  size: string
};

const Square = (props: SquareProps) => <style.Square {...props} />;

export default Square;
