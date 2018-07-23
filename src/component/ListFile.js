import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from '@material-ui/core/Popover';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import TitleIcon from '@material-ui/icons/Title';
import StyleIcon from '@material-ui/icons/Style';
import FaceIcon from '@material-ui/icons/Face';
import TodayIcon from '@material-ui/icons/Today';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 5,
  },
  info: {
    width: 300
  },
  listLine: {
    width: 276
  },
  tags: {
    padding:'0 24px',
  },
  tag: {
    margin:'0 5px 5px 0'
  }
});

class ListFile extends Component {
  state = { 
    open: false,
    anchorEl: null,
    tags: [

    ]
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleOver = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDelete = () => {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  };

  render() {

    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <ListItem button className={classes.nested}>
        <ListItemIcon>
          <SubtitlesIcon />
        </ListItemIcon>
        <ListItemText inset primary={this.props.onTitle} />
        <MoreVertIcon 
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleOver}
        />
        <Popover
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClick={this.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
          <List className={classes.info}>
            <ListItem>
              <Avatar>
                <TitleIcon />
              </Avatar>
              <ListItemText primary="Title" secondary={this.props.onTitle} />
            </ListItem>
            <li className={classes.listLine}>
              <Divider inset />
            </li>
            <ListItem>
              <Avatar>
                <StyleIcon />
              </Avatar>
              <ListItemText primary="Category" secondary="공지사항" />
            </ListItem>
            <li className={classes.listLine}>
              <Divider inset />
            </li>
            <ListItem>
              <Avatar>
                <FaceIcon />
              </Avatar>
              <ListItemText primary="Writer" secondary="potionstory" />
            </ListItem>
            <li className={classes.listLine}>
              <Divider inset />
            </li>
            <ListItem>
              <Avatar>
                <TodayIcon />
              </Avatar>
              <ListItemText primary="Date" secondary="2018년 7월 20일" />
            </ListItem>
            <li className={classes.listLine}>
              <Divider inset />
            </li>
            <ListItem>
              <Avatar>
                <LocalOfferIcon />
              </Avatar>
              <ListItemText primary="Tag" />
            </ListItem>
            <li className={classes.tags}>
              <Chip className={classes.tag} label="#가" onDelete={this.handleDelete} />
              <Chip className={classes.tag} label="#가나" onDelete={this.handleDelete} />
              <Chip className={classes.tag} label="#가나다" onDelete={this.handleDelete} />
              <Chip className={classes.tag} label="#가나다라" onDelete={this.handleDelete} />
              <Chip className={classes.tag} label="#가나다라마" onDelete={this.handleDelete} />
              <Chip className={classes.tag} label="#가나다라마바" onDelete={this.handleDelete} />
              <Chip className={classes.tag} label="#ABC" onDelete={this.handleDelete} />
              <Chip className={classes.tag} label="#ABCDE" onDelete={this.handleDelete} />
              <Chip className={classes.tag} label="#ABCDEFG" onDelete={this.handleDelete} />
            </li>
          </List>
        </Popover>
      </ListItem>
    );
  }
}

ListFile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListFile);