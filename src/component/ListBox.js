import React, { Component } from 'react';
import ListGroup from './ListGroup';
import List from '@material-ui/core/List';
import { ListBoxStyle } from '../style/ListBox';

class ListBox extends Component {
  state = { 
    title: ["공지사항", "이벤트", "업데이트", "ETC"]
  };

  render() {
    return (
      <ListBoxStyle>
        <List component="nav">
          {this.state.title.map((n, i) => {
            return (
              <ListGroup onTitle={n} />
            )
          })}
        </List>
      </ListBoxStyle>
    );
  }
}

export default ListBox;