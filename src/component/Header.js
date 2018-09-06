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
import DescriptIcon from "@material-ui/icons/Description";
import BookmarkIcon from "@material-ui/icons/Bookmark";
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
    info: [
      {
        name: "favorite",
        number: 99,
        icon: <FavoriteIcon />
      },
      {
        name: "bookmark",
        number: 99,
        icon: <BookmarkIcon />
      },
      {
        name: "descript",
        number: 99,
        icon: <DescriptIcon />
      },
      {
        name: "comment",
        number: 99,
        icon: <SmsIcon />
      }
    ],
    active: 0,
    menu: [
      {
        name: "home",
        route: "/home",
        icon: <OpacityIcon />
      },
      {
        name: "about",
        route: "/about",
        icon: <FaceIcon />
      },
      {
        name: "polog",
        route: "/polog",
        icon: <DescriptIcon />
      },
      {
        name: "bookmark",
        route: "/bookmark",
        icon: <BookmarkIcon />
      },
      {
        name: "vote",
        route: "/vote",
        icon: <VoteIcon />
      },
      {
        name: "search",
        route: "/search",
        icon: <SearchIcon />
      },
      {
        name: "status",
        route: "/status",
        icon: <GradeIcon />
      },
      {
        name: "help",
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
    const { info, menu } = this.state;
    const { gnbIndex } = this.props;
    return (
      <HeaderStyle>
        <div className="userbox">
          <div className="circle">
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
          <div className="signmenu">
            {/* <div className="out">
              <h2>POLOG</h2>
              <span className="buttons">
                <Button size="small" variant="contained">
                  <FaceIcon />
                  &nbsp; sign in
                </Button>
                
                  <OpacityIcon />
                  &nbsp; sign up
                </Button>
              </span>
            </div> */}
            <div className="in">
              <div className="detail">
                <h2>potionstory</h2>
                <ul className="infolist">
                  {info.map((n, i) => {
                    return (
                      <li key={i} className={n.name}>
                        <Chip
                          avatar={<Avatar>{n.icon}</Avatar>}
                          label={n.number}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <span className="buttons">
                <Button size="small" variant="contained">
                  <FaceIcon />
                  &nbsp; sign out
                </Button>
                <Button size="small" variant="contained">
                  <OpacityIcon />
                  &nbsp; leave
                </Button>
              </span>
            </div>
          </div>
        </div>
        <div className="menubox">
          <List component="nav">
            {menu.map((n, i) => {
              return (
                <Link
                  to={n.route}
                  key={i}
                  index={i}
                  className={gnbIndex === i ? n.name + " active" : n.name}
                  onClick={e => this.handleMenu(e, i)}
                >
                  <ListItem>
                    <ListItemIcon>{n.icon}</ListItemIcon>
                    <ListItemText inset primary={n.name} />
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
