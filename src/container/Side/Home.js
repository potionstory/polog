import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import OpacityIcon from "@material-ui/icons/Opacity";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoIcon from "@material-ui/icons/Info";
import NextIcon from "@material-ui/icons/NavigateNext";
import GroupList from "./GroupList";

class HomeSide extends Component {
  state = {
    expanded: null,
    info: [
      {
        item: "Number",
        value: 99
      },
      {
        item: "Version",
        value: "v1.0.0"
      },
      {
        item: "Last Update",
        value: "2018년 8월 20일"
      }
    ],
    list: [
      {
        category: "공지사항",
        item: [
          {
            title: "공지사항1"
          },
          {
            title: "공지사항2"
          },
          {
            title: "공지사항3"
          },
          {
            title: "공지사항4"
          },
          {
            title: "공지사항5"
          }
        ]
      },
      {
        category: "이벤트",
        item: [
          {
            title: "이벤트1"
          },
          {
            title: "이벤트2"
          },
          {
            title: "이벤트3"
          },
          {
            title: "이벤트4"
          },
          {
            title: "이벤트5"
          }
        ]
      },
      {
        category: "업데이트",
        item: [
          {
            title: "업데이트1"
          },
          {
            title: "업데이트2"
          },
          {
            title: "업데이트3"
          },
          {
            title: "업데이트4"
          },
          {
            title: "업데이트5"
          }
        ]
      },
      {
        category: "ETC",
        item: [
          {
            title: "ETC1"
          },
          {
            title: "ETC2"
          },
          {
            title: "ETC3"
          },
          {
            title: "ETC4"
          },
          {
            title: "ETC5"
          }
        ]
      }
    ]
  };

  handleChange = panel => (e, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { expanded, info, list } = this.state;
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
                {info.map((n, i) => {
                  return (
                    <ListItem key={i}>
                      <Chip
                        className="key"
                        avatar={<InfoIcon />}
                        label={n.item}
                      />
                      <span className="value">{n.value}</span>
                    </ListItem>
                  );
                })}
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>

        <div className="listgroup">
          {list.map((n, i) => {
            return (
              <div key={i} className="groupbox">
                <ExpansionPanel
                  expanded={expanded === i}
                  onChange={this.handleChange(i)}
                >
                  <ExpansionPanelSummary
                    className="title"
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <OpacityIcon />
                    <h3>{n.category}</h3>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className="detail">
                    <List component="nav">
                      <GroupList list={n.item} />
                    </List>
                  </ExpansionPanelDetails>
                  <Button className="more" variant="contained" size="small">
                    전체보기
                    <NextIcon />
                  </Button>
                </ExpansionPanel>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomeSide;
