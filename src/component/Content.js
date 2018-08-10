import React from "react";
import { ContentStyle } from "../style/Content";

const Content = props => {
  const { children } = props;
  return <ContentStyle>{children}</ContentStyle>;
};

export default Content;
