import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import OpacityIcon from "@material-ui/icons/Opacity";
import SettingsIcon from "@material-ui/icons/Settings";
import NotiIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import DescriptIcon from "@material-ui/icons/Description";
import SmsIcon from "@material-ui/icons/Sms";
import Button from "@material-ui/core/Button";
import VoteIcon from "@material-ui/icons/Beenhere";
import SearchIcon from "@material-ui/icons/Search";
import GradeIcon from "@material-ui/icons/Grade";
import HelpIcon from "@material-ui/icons/Help";
import { HeaderStyle } from "../style/Header";
import * as authActions from "../store/modules/Auth";

class Header extends Component {
  state = {
    active: 0,
    menu: [
      {
        name: "HOME",
        route: "/home",
        icon: <OpacityIcon />
      },
      {
        name: "ABOUT",
        route: "/about",
        icon: <FaceIcon />
      },
      {
        name: "POLOG",
        route: "/polog",
        icon: <DescriptIcon />
      },
      {
        name: "VOTE",
        route: "/vote",
        icon: <VoteIcon />
      },
      {
        name: "SEARCH",
        route: "/search",
        icon: <SearchIcon />
      },
      {
        name: "STATUS",
        route: "/status",
        icon: <GradeIcon />
      },
      {
        name: "HELP",
        route: "/help",
        icon: <HelpIcon />
      }
    ]
  };

  handleOver = () => {
    console.log("over");
  };

  handleMenu = (e, i) => {
    const { AuthActions } = this.props;

    AuthActions.gnbChange(i);
  };

  render() {
    const { menu } = this.state;
    const { gnbIndex } = this.props;
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
            <IconButton className="setting">
              <SettingsIcon />
            </IconButton>
            <IconButton className="noti">
              <NotiIcon />
            </IconButton>
          </div>
          <div className="SignMenu">
            {/* <div className="Out">
              <h2>POLOG</h2>
              <span className="Buttons">
                <Button size="small" variant="contained">
                  <FaceIcon />
                  &nbsp; SIGN IN
                </Button>
                
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
                          <DescriptIcon />
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
              <span className="Buttons">
                <Button size="small" variant="contained">
                  <FaceIcon />
                  &nbsp; SIGN OUT
                </Button>
                <Button size="small" variant="contained">
                  <OpacityIcon />
                  &nbsp; LEAVE
                </Button>
              </span>
            </div>
          </div>
        </div>
        <div className="MenuBox">
          <List component="nav">
            {menu.map((m, i) => {
              return (
                <Link
                  to={m.route}
                  key={i}
                  index={i}
                  className={gnbIndex == i ? m.name + " active" : m.name}
                  onClick={e => this.handleMenu(e, i)}
                >
                  <ListItem>
                    <ListItemIcon>{m.icon}</ListItemIcon>
                    <ListItemText inset primary={m.name} />
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </div>
      </HeaderStyle>
    );
  }
}

const mapStateToProps = state => {
  return {
    gnbIndex: state.Auth.gnbIndex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AuthActions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
