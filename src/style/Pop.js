import { injectGlobal } from "styled-components";
import { ColorSet } from "./ColorSet";

export const PopStyle = () => injectGlobal`
  .popInfo {
    > div + div {
      width: 168px;
      ul {
        padding: 0;
        li {
          padding: 0.5rem;
        }
      }
      .infolist {
        overflow: hidden;
        position: relative;
        background-color: ${ColorSet.white};
        li {
          float: left;
          width: calc(50% - 10px);
          height: 32px;
          margin: 6px 0;
          padding: 0 5px;
          line-height: 38px;
          .info {
            width: calc(100% - 4px);
            height: 28px;
            padding: 2px;
            background-color: ${ColorSet.gray};
            color: ${ColorSet.white};
            font-size: 0.8125rem;
            justify-content: left;
            div {
              width: 26px;
              height: 26px;
            }
            span {
              display: block;
              width: 100%;
              padding: 0 4px;
              text-align: center;
            }
          }
          svg {
            width: 18px;
            height: 18px;
            color: ${ColorSet.white};
          }
        }
        .favorite {
          div {
            div {
              background-color: ${ColorSet.red};
            }
          }
        }
        .bookmark {
          div {
            div {
              background-color: ${ColorSet.yellow};
            }
          }
        }
        .descript {
          div {
            div {
              background-color: ${ColorSet.blue};
            }
          }
        }
        .comment {
          div {
            div {
              background-color: ${ColorSet.green};
            }
          }
        }
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
    }
  }
`;
