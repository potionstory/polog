import styled from "styled-components";
import { ColorSet } from "./ColorSet";

export const ContentStyle = styled.div`
  -webkit-flex: 1;
  flex: 1;
  overflow-y: auto;
  height: 100%;
  background-color: ${ColorSet.darkGray};
  color: #fff;
`;
