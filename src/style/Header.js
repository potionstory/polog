import styled from "styled-components";
import { ColorSet } from "./ColorSet";

export const HeaderStyle = styled.div`
  overflow-y: auto;
  position: relative;
  width: 200px;
  height: 100%;
  background-color: ${ColorSet.gray};
  .userBox {
    padding: 10px;
    .circle {
      position: relative;
      text-align: center;
      cursor: pointer;
      .logo {
        display: inline-block;
        position: relative;
        z-index: 10;
        img {
          border-radius: 100px;
          vertical-align: top;
          transition: opacity 300ms;
          opacity: 0.6;
          cursor: pointer;
        }
        button {
          width: 150px;
          height: 150px;
          margin: 0;
          background-color: ${ColorSet.blue};
          transition: opacity 300ms;
          opacity: 0.6;
          svg {
            font-size: 100px;
            color: ${ColorSet.white};
          }
        }
      }
      .setting,
      .noti {
        display: none;
        position: absolute;
        top: 50%;
        z-index: 10;
        width: 32px;
        height: 32px;
        margin-top: -16px;
        background-color: ${ColorSet.white};
        color: ${ColorSet.darkGray};
        svg {
          opacity: 0.6;
          transition: opacity 300ms;
        }
        &:hover {
          svg {
            opacity: 1;
          }
        }
      }
      .setting {
        left: 0;
      }
      .noti {
        right: 0;
      }
      &:hover {
        .setting,
        .noti {
          display: block;
        }
        button,
        img {
          opacity: 1;
        }
      }
    }
    .signMenu {
      margin-top: 10px;
      position: relative;
      text-align: center;
      h2 {
        overflow: hidden;
        height: 48px;
        font-size: 20px;
        font-weight: bold;
        font-style: italic;
        color: ${ColorSet.white};
        line-height: 48px;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      .buttons {
        button {
          display: block;
          width: 100%;
          margin-top: 10px;
          font-family: "Spoqa Han Sans";
          font-size: 14px;
          background-color: ${ColorSet.lightGray};
          color: ${ColorSet.white};
          opacity: 0.6;
          &:hover {
            opacity: 1;
          }
          span {
            line-height: 24px;
          }
          svg {
            vertical-align: top;
          }
        }
      }
      .out {
        h2 {
          padding-bottom: 10px;
          color: ${ColorSet.white};
        }
      }
      .in {
        position: relative;
        .detail {
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          width: 100%;
          border-radius: 4px;
          h2 {
            overflow: hidden;
            height: 48px;
            font-size: 20px;
            font-weight: bold;
            font-style: italic;
            color: ${ColorSet.white};
            line-height: 48px;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: pointer;
          }
          .infolist {
            display: none;
            overflow: hidden;
            position: relative;
            background-color: ${ColorSet.white};
            padding: 6px 5px;
            li {
              float: left;
              width: calc(50% - 10px);
              height: 32px;
              margin: 5px 0;
              padding: 0 5px;
              line-height: 38px;
              .MuiChip-root-24 {
                width: 100%;
                justify-content: left;
                font-family: "Spoqa Han Sans";
                font-weight: 600;
              }
              svg {
                color: ${ColorSet.white};
              }
            }
            .favorite {
              .MuiChip-avatar-27 {
                background-color: ${ColorSet.red};
              }
            }
            .bookmark {
              .MuiChip-avatar-27 {
                background-color: ${ColorSet.yellow};
              }
            }
            .descript {
              .MuiChip-avatar-27 {
                background-color: ${ColorSet.blue};
              }
            }
            .commnet {
              .MuiChip-avatar-27 {
                background-color: ${ColorSet.green};
              }
            }
          }
          &:hover {
            background-color: ${ColorSet.white};
            h2 {
              color: ${ColorSet.darkGray};
            }
            .infolist {
              display: block;
            }
          }
        }
        .buttons {
          display: block;
          padding-top: 48px;
        }
      }
    }
  }
  .menubox {
    margin-top: 10px;
    color: ${ColorSet.white};
    nav {
      > a {
        display: block;
        opacity: 0.6;
        text-decoration: none;
        &:hover {
          opacity: 1;
        }
        span {
          font-family: "Spoqa Han Sans";
          font-size: 14px;
          color: ${ColorSet.white};
          text-transform: uppercase;
        }
        svg {
          color: ${ColorSet.white};
        }
      }
      .active {
        opacity: 1;
        background-color: ${ColorSet.brightGray};
      }
      ${"" /* .home.active {
        background-color: ${ColorSet.blue};
      }
      .about.active {
        background-color: ${ColorSet.red};
      }
      .polog.active {
        background-color: ${ColorSet.green};
      }
      .vote.active {
        background-color: ${ColorSet.orange};
      }
      .search.active {
        background-color: ${ColorSet.indigo};
      }
      .status.active {
        background-color: ${ColorSet.yellow};
        span,
        svg {
          color: ${ColorSet.darkGray};
        }
      }
      .help.active {
        background-color: ${ColorSet.purple};
      } */};
    }
  }
`;
