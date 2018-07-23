import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ListFile from './ListFile';

class ListBox extends Component {
  state = { 
    open: false,
    item: ["1st 공지사항", "2nd 공지사항", "3rd 공지사항", "4th 공지사항"]
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
          {this.state.open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </ListItemIcon>
          <ListItemText inset primary={this.props.onCategory} />
          <span className="num">99</span>
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {this.state.item.map((n, i) => {
              return (
                <ListFile onTitle={n}/>
              )
            })}
          </List>
        </Collapse>
      </div>
    );
  }
}

export default ListBox;