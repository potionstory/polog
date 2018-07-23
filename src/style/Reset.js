import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

export const ResetStyle = () => injectGlobal`
  ${reset}
  body {
    &:before {
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:60px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      content:'';
    }
  }
`;