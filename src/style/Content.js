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
  .main {
    .Card {
      display: inline-block;
      margin: 1rem;
      max-width: 300px;
      background-color: ${ColorSet.darkGray};
      opacity: 0.6;
      transition: opacity 300ms;
      &:hover {
        opacity: 1;
      }
      .CardHeader {
        position: relative;
        padding: 1rem;
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
            font-size: 18px;
            font-weight: bold;
            font-style: italic;
            color: ${ColorSet.gray};
            line-height: 48px;
          }
        }
        button {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }
      }
      .CardContent {
        background-color: ${ColorSet.lightGray};
        padding: 0;
        a {
          display: block;
          padding: 1rem;
          text-decoration: none;
          h4 {
            font-size: 1.25rem;
            font-weight: bold;
            color: ${ColorSet.white};
            line-height: 1.5rem;
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
      .CardActions {
        padding: 1rem;
        background-color: ${ColorSet.blue};
        button {
          svg {
            color: ${ColorSet.white};
          }
        }
      }
    }
  }
`;
