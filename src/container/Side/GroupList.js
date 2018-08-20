import React, { Component, Fragment } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DescriptIcon from "@material-ui/icons/Description";

class GroupList extends Component {
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        {list.map((n, i) => {
          return (
            <ListItem key={i} button>
              <ListItemIcon>
                <DescriptIcon />
              </ListItemIcon>
              <ListItemText primary={n.title} />
            </ListItem>
          );
        })}
      </Fragment>
    );
  }
}

export default GroupList;
