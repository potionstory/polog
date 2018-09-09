import { injectGlobal } from "styled-components";

export const PopStyle = () => injectGlobal`
  .PopInfo {
    > div + div {
      ul {
        padding: 0;
        li {
          padding: 0.5rem;
        }
      }
    }
  }
`;
