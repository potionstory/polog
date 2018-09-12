import styled from "styled-components";
import { ColorSet } from "./ColorSet";

export const ContentStyle = styled.div`
  -webkit-flex: 1;
  flex: 1;
  overflow-y: auto;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${ColorSet.darkGray};
  color: #fff;
  h3 {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #fff;
    font-size: 1.4rem;
    font-weight: bold;
  }
  .main {
    .card {
      display: inline-block;
      max-width: 300px;
      background-color: ${ColorSet.darkGray};
      opacity: 0.6;
      transition: opacity 300ms;
      &:hover {
        opacity: 1;
      }
      .cardHeader {
        position: relative;
        padding: 0.5rem;
        background-color: #fff;
        a {
          display: -webkit-flex;
          display: flex;
          margin-right: 48px;
          text-decoration: none;
          div {
            width: 48px;
            height: 48px;
            background-color: ${ColorSet.blue};
            svg {
              width: 32px;
              height: 32px;
            }
          }
          .user {
            -webkit-flex: 1;
            flex: 1;
            padding: 0 1rem;
            font-size: 1rem;
            font-weight: bold;
            font-style: italic;
            color: ${ColorSet.gray};
            line-height: 48px;
          }
        }
        button {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
        }
      }
      .cardCatergory {
        position: relative;
        padding: 0.5rem;
        background-color: ${ColorSet.white};
        &:after {
          position: absolute;
          top: 0;
          left: 0.5rem;
          width: calc(100% - 1rem);
          height: 1px;
          background-color: ${ColorSet.lightGray};
          content: "";
          opacity: 0.2;
        }
        a {
          display: inline-block;
          padding: 0 0.5rem;
          border-radius: 4px;
          background-color: ${ColorSet.lightGray};
          font-size: 0.8125rem;
          color: ${ColorSet.white};
          text-decoration: none;
          vertical-align: middle;
          line-height: 24px;
          opacity: 0.6;
          &:hover {
            opacity: 1;
          }
        }
        svg {
          vertical-align: middle;
          color: ${ColorSet.lightGray};
        }
      }
      .cardContent {
        background-color: ${ColorSet.lightGray};
        padding: 0;
        a {
          display: block;
          padding: 1rem;
          text-decoration: none;
          h4 {
            display: -webkit-box;
            overflow: hidden;
            height: 3rem;
            font-size: 1.25rem;
            font-weight: bold;
            color: ${ColorSet.white};
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            line-height: 1.5rem;
            -webkit-box-orient: vertical;
          }
          p {
            display: -webkit-box;
            overflow: hidden;
            height: 3.75rem;
            margin-top: 1rem;
            color: ${ColorSet.fontWhite};
            -webkit-line-clamp: 3;
            text-overflow: ellipsis;
            line-height: 1.25rem;
            -webkit-box-orient: vertical;
          }
        }
      }
      .cardActions {
        display: block;
        padding: 0.5rem;
        background-color: ${ColorSet.blue};
        ul {
          float: left;
          li {
            display: inline-block;
            margin-right: 1rem;
            svg {
              color: ${ColorSet.white};
              vertical-align: middle;
            }
            span {
              display: inline-block;
              padding: 0 8px;
              font-size: 0.8125rem;
              line-height: 24px;
            }
          }
        }
        p {
          float: right;
          font-size: 0.8125rem;
          color: ${ColorSet.white};
          line-height: 24px;
        }
        &:after {
          display: block;
          clear: both;
          content: "";
        }
      }
    }
  }
`;
