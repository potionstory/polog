import styled from "styled-components";
import { ColorSet } from "./ColorSet";

export const SideStyle = styled.div`
  overflow-y: auto;
  position: relative;
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  background-color: ${ColorSet.brightGray};
  color: #fff;
  .infocard {
    padding: 10px;
    .card {
      overflow: hidden;
      position: relative;
      border-radius: 4px;
      box-shadow: none;
      background-color: transparent;
      color: #fff;
      .title {
        width: 100%;
        min-height: 50px;
        padding: 0;
        color: #fff;
        font-style: italic;
        text-transform: uppercase;
        justify-content: left;
        div {
          height: 48px;
          margin: 0;
          div {
            width: 48px;
            background-color: #fff;
            svg {
              width: 36px;
              height: 36px;
              color: #2463d4;
            }
          }
          h2 {
            margin-left: 10px;
            font-size: 20px;
            font-weight: 600;
            line-height: 48px;
          }
        }
        div + div {
          right: 0;
          color: #fff;
        }
      }
      .detail {
        margin-top: 10px;
        padding: 10px;
        border-radius: 4px;
        background-color: #fff;
        ul,
        li {
          width: 100%;
          padding: 0;
          li {
            position: relative;
            margin-top: 10px;
            &:first-child {
              margin-top: 0;
            }
            .key {
              background-color: #4b5669;
              color: #fff;
              svg {
                width: 32px;
                height: 32px;
                color: #fff;
              }
            }
            .value {
              position: absolute;
              top: 0;
              right: 0;
              min-width: 8px;
              height: 32px;
              padding: 0 12px;
              border-radius: 16px;
              background-color: #4b5669;
              font-size: 13px;
              color: #fff;
              text-align: center;
              line-height: 32px;
            }
          }
        }
      }
    }
  }
  &.home {
  }
  &.about {
  }
  &.polog {
  }
  &.vote {
  }
  &.search {
  }
  &.status {
  }
  &.help {
  }
`;
