import styled from 'styled-components';

export const SideBoxStyle = styled.div`
  overflow-y:auto;
  width:300px;
  height:100%;
  background-color: #424242;
  h2 {
    position:relative;
    height:60px;
    padding:0 5px;
    font-size:1.3125rem;
    font-weight:500;
    color:#fff;
    line-height:60px;
    &:after {
      position:absolute;
      top:60px;
      left:5px;
      width:calc(100% - 10px);
      height:1px;
      background-color:#fff;
      opacity:0.5;
      content:'';
    }
  }
  .intro {
    display:block;
    margin:25px 0;
    text-align:center;
    p {margin-top:25px;}
    svg {
      padding:25px;
      background-color:#fff;
      border-radius:100px;
      font-size:100px;
      color:#212121;
      vertical-align:middle;
    }
  }
`;