import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: relative;
  width: 300px;
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    content: "";
    background-color: #e0e0e0;
  }
  .UserBox {
    padding: 50px;
    background-color: #2196f3;
    .Circle {
      position: relative;
      .logo {
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
          width: 200px;
          height: 200px;
          margin: 0;
          color: #fff;
          background-color: #fff;
          opacity: 0.8;
          transition: opacity 300ms;
          &:hover {
            opacity: 1;
          }
          svg {
            font-size: 150px;
            color: #2196f3;
          }
        }
      }
      .Progress {
        position: absolute;
        top: -10px;
        left: -10px;
        color: #1565c0;
      }
    }
  }
  .SignMenu {
    overflow: hidden;
    position: relative;
    background-color: #1565c0;
    text-align: center;
    button {
      float: left;
      width: 50%;
      border-radius: 0;
      font-family: "Spoqa Han Sans";
      font-size: 1rem;
      font-weight: 600;
      background-color: #1565c0;
      color: #fff;
    }
  }
`;
