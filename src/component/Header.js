import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import OpacityIcon from "@material-ui/icons/Opacity";
import FaceIcon from "@material-ui/icons/Face";
import CircularProgress from "@material-ui/core/CircularProgress";
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
    const { classes } = this.props;
    return (
      <HeaderStyle>
        <div className="UserBox">
          <div className="Circle">
            <div className="logo" onMouseOver={this.handleOver}>
              <IconButton>
                <OpacityIcon />
              </IconButton>
              {/* <img src="http://placehold.it/200x200" /> 유저 이미지 */}
            </div>
            <CircularProgress
              className="Progress"
              size={220}
              thickness={2}
              variant="static"
              value={this.state.completed}
            />
          </div>
        </div>
        <div className="SignMenu">
          <Button size="">
            <FaceIcon />
            &nbsp; SIGN IN
          </Button>
          <Button size="">
            <OpacityIcon />
            &nbsp; SIGN UP
          </Button>
        </div>
        <div className="Menu" />
      </HeaderStyle>
    );
  }
}

export default Header;
