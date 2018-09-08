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
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SmsIcon from "@material-ui/icons/Sms";

class HomeContent extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
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
            <IconButton>
              <MoreVertIcon />
            </IconButton>
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
