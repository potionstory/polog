import { injectGlobal } from "styled-components";
import reset from "styled-reset";

export const ResetStyle = () => injectGlobal`
  ${reset}
  body {
    font-family: "Spoqa Han Sans", "Roboto", "Helvetica Neue","Arial", "sans-serif"
  }
`;
