import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import OpacityIcon from "@material-ui/icons/Opacity";
import FaceIcon from "@material-ui/icons/Face";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import DescriptionIcon from "@material-ui/icons/Description";
import SmsIcon from "@material-ui/icons/Sms";
import Button from "@material-ui/core/Button";
import { HeaderStyle } from "../style/Header";

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
          </div>
          <div className="SignMenu">
            {/* <div class="Out">
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
                      label={999}
                    />
                  </li>
                  <li className="BookMark">
                    <Chip
                      avatar={
                        <Avatar>
                          <BookmarkIcon />
                        </Avatar>
                      }
                      label={999}
                    />
                    &nbsp;166
                  </li>
                  <li className="Descript">
                    <Chip
                      avatar={
                        <Avatar>
                          <DescriptionIcon />
                        </Avatar>
                      }
                      label={999}
                    />
                  </li>
                  <li className="Commnet">
                    <Chip
                      avatar={
                        <Avatar>
                          <SmsIcon />
                        </Avatar>
                      }
                      label={999}
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
      </HeaderStyle>
    );
  }
}

export default Header;
