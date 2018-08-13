import styled from "styled-components";
import { ColorSet } from "./ColorSet";

console.log(ColorSet);
export const HeaderStyle = styled.div`
  position: relative;
  width: 200px;
  padding: 10px;
  .UserBox {
    padding: 10px;
    border-radius: 10px;
    background-color: ${ColorSet.darkGray};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    .Circle {
      position: relative;
      text-align: center;
      .logo {
        display: inline-block;
        overflow: hidden;
        position: relative;
        z-index: 10;
        border-radius: 100px;
        img {
          vertical-align: top;
          opacity: 0.8;
          transition: opacity 300ms;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
        button {
          width: 150px;
          height: 150px;
          margin: 0;
          color: ${ColorSet.white};
          background-color: ${ColorSet.white};
          opacity: 0.6;
          transition: opacity 300ms;
          &:hover {
            opacity: 1;
          }
          svg {
            font-size: 100px;
            color: ${ColorSet.darkGray};
          }
        }
      }
    }
    .SignMenu {
      margin-top: 10px;
      position: relative;
      text-align: center;
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
              width: 50%;
              height: 48px;
              margin-top: 10px;
              line-height: 48px;
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
`;
