// @flow
import React from "react";
import { storiesOf } from "@storybook/react";
import Square from "./index";

storiesOf("Square", module)
  .add("with default props", () => <Square />)
  .add("with color changed", () => <Square color="blue" />)
  .add("with size changed", () => <Square size="40px" />);
