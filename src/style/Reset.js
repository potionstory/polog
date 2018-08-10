import { injectGlobal } from "styled-components";
import reset from "styled-reset";

export const ResetStyle = () => injectGlobal`
  ${reset}
`;
