import styled from "styled-components";
import { ColorSet } from "./ColorSet";

export const SideStyle = styled.div`
  overflow-y: auto;
  position: relative;
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  background-color: ${ColorSet.lightGray};
  color: ${ColorSet.white};
  .infocard {
    margin-top: 10px;
    padding: 0 10px;
    .card {
      overflow: hidden;
      position: relative;
      border-radius: 4px;
      box-shadow: none;
      background-color: transparent;
      color: ${ColorSet.white};
      .title {
        width: 100%;
        min-height: 50px;
        padding: 0;
        color: ${ColorSet.white};
        font-style: italic;
        text-transform: uppercase;
        justify-content: left;
        div {
          height: 48px;
          margin: 0;
          div {
            width: 48px;
            background-color: ${ColorSet.white};
            svg {
              width: 36px;
              height: 36px;
              color: ${ColorSet.blue};
            }
          }
          h2 {
            margin-left: 10px;
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 48px;
          }
        }
        div + div {
          right: 0;
          color: ${ColorSet.white};
        }
      }
      .detail {
        margin-top: 10px;
        padding: 10px;
        border-radius: 4px;
        background-color: ${ColorSet.white};
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
              width: 100%;
              background-color: ${ColorSet.lightGray};
              color: ${ColorSet.white};
              line-height: 32px;
              justify-content: left;
              svg {
                width: 32px;
                height: 32px;
                color: ${ColorSet.white};
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
              font-size: 0.8125rem;
              color: ${ColorSet.white};
              text-align: center;
              line-height: 32px;
            }
          }
        }
      }
    }
  }
  .listgroup {
    padding: 0 10px;
    .groupbox {
      margin-top: 10px;
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
      > div {
        box-shadow: none;
        border-radius: 4px 4px 0 0;
        &:first-child {
          margin: 0;
        }
        .title {
          min-height: 38px;
          padding: 0 10px;
          div:first-child {
            margin: 0;
            svg {
              color: ${ColorSet.lightGray};
            }
          }
          h3 {
            padding: 0 10px;
            color: ${ColorSet.lightGray};
            font-size: 1.04rem;
            font-weight: 600;
            font-style: italic;
            line-height: 24px;
          }
          div + div {
            right: 5px;
            width: 38px;
            height: 38px;
            svg {
              color: ${ColorSet.lightGray};
            }
          }
        }
        .detail {
          padding: 0;
          nav {
            width: 100%;
            padding: 0;
            border-top: 1px solid #e0e0e0;
            background-color: #fafafa;
            > div {
              padding: 7px 24px;
              background-color: ;
              &:hover {
                opacity: 1;
              }
              svg {
                margin-right: 0;
              }
              div {
                padding: 0 0 0 10px;
                span {
                  display: block;
                  overflow: hidden;
                  font-size: 0.98rem;
                  color: #67696b;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  letter-spacing: -0.4px;
                }
              }
            }
          }
        }
      }
      div + div {
        &:before {
          display: none;
        }
      }
      .more {
        width: 100%;
        height: 38px;
        border-radius: 0 0 4px 4px;
        background-color: ${ColorSet.blue};
        color: ${ColorSet.white};
        line-height: 24px;
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
