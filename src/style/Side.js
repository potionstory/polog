import styled from "styled-components";
import { ColorSet } from "./ColorSet";

export const SideStyle = styled.div`
  overflow-y: auto;
  position: relative;
  width: 300px;
  height: 100%;
  color: #fff;
  &.home {
    background-color: ${ColorSet.blue};
  }
  &.about {
    background-color: ${ColorSet.red};
  }
  &.polog {
    background-color: ${ColorSet.green};
  }
  &.vote {
    background-color: ${ColorSet.orange};
  }
  &.search {
    background-color: ${ColorSet.indigo};
  }
  &.status {
    background-color: ${ColorSet.yellow};
  }
  &.help {
    background-color: ${ColorSet.purple};
  }
`;
