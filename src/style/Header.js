import styled from 'styled-components';

export const HeaderStyle = styled.div`
  width:60px;
  height:100%;
  background-color: #212121;
  button {
    margin:0;
    color: #fff;
    opacity:0.5;
    &:hover {
      opacity:1;
    }
    svg {
      font-size:30px;
    }
  }
  h1 {
    position:relative;
    padding:6px 5px;
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
  ul {
    padding:5px;
    li {
      padding:1px;
    }
  }
`;