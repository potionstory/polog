import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import OpacityIcon from "@material-ui/icons/Opacity";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoIcon from "@material-ui/icons/Info";
import NextIcon from "@material-ui/icons/NavigateNext";
import DescriptIcon from "@material-ui/icons/Description";

class HomeSide extends Component {
  state = {
    expanded: null
  };

  handleChange = panel => (e, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div>
        <div className="infocard">
          <ExpansionPanel defaultExpanded className="card">
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              className="title"
            >
              <Avatar>
                <OpacityIcon />
              </Avatar>
              <h2>home</h2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="detail">
              <List>
                <ListItem>
                  <Chip className="key" avatar={<InfoIcon />} label="Number" />
                  <span className="value">999</span>
                </ListItem>
                <ListItem>
                  <Chip className="key" avatar={<InfoIcon />} label="Version" />
                  <span className="value">v0.0.0</span>
                </ListItem>
                <ListItem>
                  <Chip
                    className="key"
                    avatar={<InfoIcon />}
                    label="Last Update"
                  />
                  <span className="value">2018년 8월 20일</span>
                </ListItem>
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>

        <div className="listgroup">
          <div className="groupbox">
            <ExpansionPanel
              expanded={expanded === "panel1"}
              onChange={this.handleChange("panel1")}
            >
              <ExpansionPanelSummary
                className="title"
                expandIcon={<ExpandMoreIcon />}
              >
                <OpacityIcon />
                <h3>공지사항</h3>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="detail">
                <List component="nav">
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="공지사항1" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="공지사항2" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="공지사항3" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="공지사항4" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="공지사항5" />
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <Button className="more" variant="contained" size="small">
              전체보기
              <NextIcon />
            </Button>
          </div>
          <div className="groupbox">
            <ExpansionPanel
              expanded={expanded === "panel2"}
              onChange={this.handleChange("panel2")}
            >
              <ExpansionPanelSummary
                className="title"
                expandIcon={<ExpandMoreIcon />}
              >
                <OpacityIcon />
                <h3>이벤트</h3>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="detail">
                <List component="nav">
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="이벤트1" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="이벤트2" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="이벤트3" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="이벤트4" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="이벤트5" />
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <Button className="more" variant="contained" size="small">
              전체보기
              <NextIcon />
            </Button>
          </div>
          <div className="groupbox">
            <ExpansionPanel
              expanded={expanded === "panel3"}
              onChange={this.handleChange("panel3")}
            >
              <ExpansionPanelSummary
                className="title"
                expandIcon={<ExpandMoreIcon />}
              >
                <OpacityIcon />
                <h3>업데이트</h3>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="detail">
                <List component="nav">
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="업데이트1" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="업데이트2" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="업데이트3" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="업데이트4" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="업데이트5" />
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <Button className="more" variant="contained" size="small">
              전체보기
              <NextIcon />
            </Button>
          </div>
          <div className="groupbox">
            <ExpansionPanel
              expanded={expanded === "panel4"}
              onChange={this.handleChange("panel4")}
            >
              <ExpansionPanelSummary
                className="title"
                expandIcon={<ExpandMoreIcon />}
              >
                <OpacityIcon />
                <h3>ETC</h3>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="detail">
                <List component="nav">
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="ETC1" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="ETC2" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="ETC3" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="ETC4" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DescriptIcon />
                    </ListItemIcon>
                    <ListItemText primary="ETC5" />
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <Button className="more" variant="contained" size="small">
              전체보기
              <NextIcon />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSide;
