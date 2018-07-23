import styled from 'styled-components';

export const SideBoxStyle = styled.div`
  overflow-y:auto;
  width:300px;
  height:100%;
  padding-top:60px;
  background-color: #2196f3;
  box-sizing:border-box;
  h2 {
    position:fixed;
    top:0;
    left:60px;
    z-index:10;
    width:273px;
    height:60px;
    padding:0 5px;
    background-color:#2196f3;
    font-size:1.3125rem;
    font-weight:500;
    color:#fff;
    line-height:60px;
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
      color:#2196f3;
      vertical-align:middle;
    }
  }
`;