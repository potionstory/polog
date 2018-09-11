import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import OpacityIcon from "@material-ui/icons/Opacity";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Chip from "@material-ui/core/Chip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DescriptIcon from "@material-ui/icons/Description";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SmsIcon from "@material-ui/icons/Sms";

import Popover from "@material-ui/core/Popover";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

class HomeContent extends Component {
  state = {
    anchorEl: null,
    list: [
      {
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
        ]
      }
    ]
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className="main">
        <Card className="Card">
          <div className="CardHeader">
            <Link to="/">
              <Avatar>
                <OpacityIcon />
              </Avatar>
              <strong className="user">potionstory</strong>
            </Link>
            <IconButton
              aria-owns={open ? "simple-popper" : null}
              aria-haspopup="true"
              variant="contained"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Popover
              id="UserInfo"
              className="PopInfo"
              open={open}
              anchorEl={anchorEl}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
            >
              <List>
                <ListItem>
                  <ul className="infolist">
                    {this.state.list[0].info.map((n, i) => {
                      return (
                        <li key={i} className={n.name}>
                          <Chip
                            className="info"
                            avatar={<Avatar>{n.icon}</Avatar>}
                            label={n.number}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </ListItem>
                <ListItem>
                  <Link to="/">DETAIL</Link>
                </ListItem>
              </List>
            </Popover>
          </div>
          <div className="CardCatergory">
            <Link to="/">HOME</Link>
            <ChevronRightIcon />
            <Link to="/">공지사항</Link>
          </div>
          <CardContent className="CardContent">
            <Link to="/">
              <h4>
                타이틀
                <br />
                타이틀
              </h4>
              <Typography component="p">
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세.
                무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.
              </Typography>
            </Link>
          </CardContent>
          <CardActions className="CardActions">
            <ul>
              <li>
                <FavoriteIcon />
                <span>99</span>
              </li>
              <li>
                <SmsIcon />
                <span>99</span>
              </li>
            </ul>
            <Typography className="date" component="p">
              2018.09.21
            </Typography>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default HomeContent;
