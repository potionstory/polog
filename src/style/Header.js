import styled from "styled-components";
import { ColorSet } from "./ColorSet";

export const HeaderStyle = styled.div`
  overflow-y: auto;
  position: relative;
  width: 200px;
  height: 100%;
  background-color: ${ColorSet.darkGray};
  .UserBox {
    padding: 10px;
    .Circle {
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
          background-color: ${ColorSet.lightBlue};
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
    .SignMenu {
      margin-top: 10px;
      position: relative;
      text-align: center;
      h2 {
        overflow: hidden;
        height: 48px;
        font-size: 1.5rem;
        font-weight: bold;
        font-style: italic;
        color: ${ColorSet.white};
        line-height: 48px;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      .Buttons {
        button {
          display: block;
          width: 100%;
          margin-top: 10px;
          font-family: "Spoqa Han Sans";
          font-size: 1rem;
          font-weight: 600;
          background-color: ${ColorSet.gray};
          box-shadow: none;
          color: ${ColorSet.white};
          opacity: 0.6;
          &:hover {
            opacity: 1;
          }
          svg {
            vertical-align: top;
          }
        }
      }
      .Out {
        h2 {
          padding-bottom: 10px;
        }
      }
      .In {
        position: relative;
        .Detail {
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          width: 100%;
          border-radius: 10px;
          h2 {
            overflow: hidden;
            height: 48px;
            font-size: 1.5rem;
            font-weight: bold;
            font-style: italic;
            color: ${ColorSet.white};
            line-height: 48px;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: pointer;
          }
          .InfoList {
            display: none;
            overflow: hidden;
            position: relative;
            background-color: ${ColorSet.white};
            padding: 5px;
            li {
              float: left;
              width: calc(50% - 10px);
              height: 48px;
              margin-top: 10px;
              padding: 0 5px;
              line-height: 48px;
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
            .Favorite {
              .MuiChip-avatar-27 {
                background-color: ${ColorSet.lightRed};
              }
            }
            .BookMark {
              .MuiChip-avatar-27 {
                background-color: ${ColorSet.lightYellow};
              }
            }
            .Descript {
              .MuiChip-avatar-27 {
                background-color: ${ColorSet.lightBlue};
              }
            }
            .Commnet {
              .MuiChip-avatar-27 {
                background-color: ${ColorSet.lightGreen};
              }
            }
          }
          &:hover {
            background-color: ${ColorSet.white};
            h2 {
              color: ${ColorSet.darkGray};
            }
            .InfoList {
              display: block;
            }
          }
        }
        .Buttons {
          display: block;
          padding-top: 58px;
        }
      }
    }
  }
  .MenuBox {
    margin-top: 10px;
    color: #fff;
    nav {
      span {
        font-family: "Spoqa Han Sans";
        font-size: 14px;
        color: #fff;
      }
      svg {
        color: #fff;
      }
    }
  }
`;
