import styled from 'styled-components';

export const HeaderStyle = styled.div`
  width:60px;
  height:100%;
  background-color: #1769aa;
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
  }
  ul {
    padding:5px;
    li {
      padding:1px;
    }
  }
`;