import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import CancelIcon from '@material-ui/icons/Cancel';
import { withStyles } from '@material-ui/core/styles';
import { TabMenuStyle } from '../style/TabMenu';

const styles = theme => ({
  button: {
    height: 60,
    borderRadius:0,
    backgroundColor:"#424242",
    color:"#fff"
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const TabMenu = (props) => {

  const { classes } = props;

  return (
    <TabMenuStyle>
      <ul>
        <li className="active">
          <Button variant="contained">
            <SubtitlesIcon />
            공지사항1
            <button type="button"><CancelIcon /></button>
          </Button>
        </li>
        <li>
          <Button variant="contained">
            <SubtitlesIcon />
            공지사항2
            <button type="button"><CancelIcon /></button>
          </Button>
        </li>
        <li>
          <Button variant="contained">
            <SubtitlesIcon />
            공지사항3
            <button type="button"><CancelIcon /></button>
          </Button>
        </li>
        <li>
          <Button variant="contained">
            <SubtitlesIcon />
            공지사항4
            <button type="button"><CancelIcon /></button>
          </Button>
        </li>
      </ul>
    </TabMenuStyle>
  )
};

TabMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabMenu);