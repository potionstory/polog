import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import OpacityIcon from "@material-ui/icons/Opacity";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoIcon from "@material-ui/icons/Info";

const HomeSide = () => {
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
      <div>공지사항</div>
      <div>이벤트</div>
      <div>업데이트</div>
      <div>ETC</div>
    </div>
  );
};

export default HomeSide;
