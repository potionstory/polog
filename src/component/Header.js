import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import OpacityIcon from "@material-ui/icons/Opacity";
import SettingsIcon from "@material-ui/icons/Settings";
import NotiIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import DescriptionIcon from "@material-ui/icons/Description";
import SmsIcon from "@material-ui/icons/Sms";
import Button from "@material-ui/core/Button";
import { HeaderStyle } from "../style/Header";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import SearchIcon from "@material-ui/icons/Search";
import GradeIcon from "@material-ui/icons/Grade";
import HelpIcon from "@material-ui/icons/Help";

class Header extends Component {
  state = {
    completed: 25
  };

  handleOver = () => {
    console.log("over");
  };

  render() {
    return (
      <HeaderStyle>
        <div className="UserBox">
          <div className="Circle">
            <div className="logo" onMouseOver={this.handleOver}>
              <IconButton>
                <OpacityIcon />
              </IconButton>
              {/* <img src="http://placehold.it/150x150" /> 유저 이미지 */}
            </div>
            <IconButton mini className="setting">
              <SettingsIcon />
            </IconButton>
            <IconButton className="noti">
              <NotiIcon />
            </IconButton>
          </div>
          <div className="SignMenu">
            {/* <div class="Out">
              <h2>POLOG</h2>
              <span class="Buttons">
                <Button size="small" variant="extendedFab">
                  <FaceIcon />
                  &nbsp; SIGN IN
                </Button>
                <Button size="small" variant="extendedFab">
                  <OpacityIcon />
                  &nbsp; SIGN UP
                </Button>
              </span>
            </div> */}
            <div className="In">
              <div className="Detail">
                <h2>potionstory</h2>
                <ul className="InfoList">
                  <li className="Favorite">
                    <Chip
                      avatar={
                        <Avatar>
                          <FavoriteIcon />
                        </Avatar>
                      }
                      label={99}
                    />
                  </li>
                  <li className="BookMark">
                    <Chip
                      avatar={
                        <Avatar>
                          <BookmarkIcon />
                        </Avatar>
                      }
                      label={99}
                    />
                  </li>
                  <li className="Descript">
                    <Chip
                      avatar={
                        <Avatar>
                          <DescriptionIcon />
                        </Avatar>
                      }
                      label={99}
                    />
                  </li>
                  <li className="Commnet">
                    <Chip
                      avatar={
                        <Avatar>
                          <SmsIcon />
                        </Avatar>
                      }
                      label={99}
                    />
                  </li>
                </ul>
              </div>
              <span class="Buttons">
                <Button size="small" variant="extendedFab">
                  <FaceIcon />
                  &nbsp; SIGN OUT
                </Button>
                <Button size="small" variant="extendedFab">
                  <OpacityIcon />
                  &nbsp; LEAVE
                </Button>
              </span>
            </div>
          </div>
        </div>
        <div className="MenuBox">
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <Avatar>
                  <OpacityIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText inset primary="HOME" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Avatar>
                  <FaceIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText inset primary="ABOUT" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Avatar>
                  <DescriptionIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText inset primary="POLOG" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Avatar>
                  <SearchIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText inset primary="SEARCH" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Avatar>
                  <GradeIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText inset primary="STATUS" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Avatar>
                  <HelpIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText inset primary="HELP" />
            </ListItem>
          </List>
        </div>
      </HeaderStyle>
    );
  }
}

export default Header;
