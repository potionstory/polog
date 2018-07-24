import styled from 'styled-components';

export const TabMenuStyle = styled.div`
  height:60px;
  ul {
    li {
      float:left;
      > button {
        height:60px;
        padding-right:56px;
        border-radius:0;
        background-color:#424242;
        font-size:1rem;
        color:#fff;
        opacity:0.5;
        &:hover {
          background-color:#424242;
          opacity:1;
          button {
            visibility:visible;
          }
        }
        svg {
          margin-right:16px;
        }
        button {
          visibility:hidden;
          position:absolute;
          top:50%;
          right:16px;
          width:24px;
          height:24px;
          min-height:20px;
          margin-top:-12px;
          padding:0;
          border:0;
          background-color:transparent;
          color:#fff;
          cursor:pointer;
          &:hover {
            color:#FFC107;
          }
          svg {
            font-size:24px;
            font-weight:bold;
            margin-right:0;
            vertical-align:middle;
          }
        }
      }
    }
    .active {
      > button {
        color:#FFC107;
        font-weight:bold;
        opacity:1;
        &:after {
          position:absolute;
          bottom:0;
          left:0;
          width:100%;
          height:1px;
          background-color:#FFC107;
          content:'';
        }
      }
    }
  }
`;