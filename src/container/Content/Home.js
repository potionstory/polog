import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import OpacityIcon from "@material-ui/icons/Opacity";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  actions: {
    display: "flex"
  }
});

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
          <CardContent className="CardContent">
            <Link to="/">
              <h4>리액트에 대해서 설명해보자 리액트에 대해서 설명해보자</h4>
              <Typography component="p">
                리액트는 정말 인기있는 프론트엔드 라이브러리입니다. 그런데 일단,
                리액트에 대해서 알아보기전에, 이 프론트엔드 라이브러리란게
                정확히 뭔지, 그리고 왜 필요한건지에 대해서 알아봅시다. 일단,
                여러분이 웹사이트를 만들기 위해선, 사실 프론트엔드 라이브러리의
                도움 없이도 만들어낼 수 있습니다. 그리고 단순히 정적 페이지를
                만드는거라면 자바스크립트 없이도, 그냥 HTML 과 CSS 를 사용해서
                만들면 되죠. 거기에 자바스크립트를 더해주면, 유저의 행동흐름에
                따라서 동적으로 화면을 보여줄 수 있게 되겠죠. 그런데 요즘의
                웹은요, 단순히 웹 페이지 가 아니라, 웹 애플리케이션이에요.
                브라우저 상으로도 정말 자연스러운 흐름으로 매우 많은것들을 할
                수가 있죠. 자, 그런데 어떠한 유저인터페이스를 동적으로
                나타내기위해서는 정말 수많은 상태를 관리해줘야합니다.
              </Typography>
            </Link>
          </CardContent>
          <CardActions className="CardActions">
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <Typography component="p">2018.09.21</Typography>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(HomeContent);
