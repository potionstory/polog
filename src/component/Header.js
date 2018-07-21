import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../style/Header';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import OpacityIcon from '@material-ui/icons/Opacity';
import FaceIcon from '@material-ui/icons/Face';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  lightTooltip: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
});

const Header = (props) => {
  const { classes } = props;
  return (
    <HeaderStyle>
      <h1>
        <Tooltip title="POLOG" placement="right" classes={{ tooltip: classes.lightTooltip }}>
          <Link to="/polog">
            <IconButton className={classes.button} aria-label="logo">
              <OpacityIcon />
            </IconButton>
          </Link>
        </Tooltip>
      </h1>
      <ul>
        <li>
          <Tooltip title="ABOUT" placement="right" classes={{ tooltip: classes.lightTooltip }}>
            <Link to="/about">
              <IconButton className={classes.button} aria-label="Delete">
                <FaceIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="LOG" placement="right" classes={{ tooltip: classes.lightTooltip }}>
            <Link to="/log">
              <IconButton className={classes.button} aria-label="Delete">
                <SubtitlesIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="SEARCH" placement="right" classes={{ tooltip: classes.lightTooltip }}>
            <Link to="/search">
              <IconButton className={classes.button} aria-label="Add an alarm">
                <SearchIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="SETTING" placement="right" classes={{ tooltip: classes.lightTooltip }}>
            <Link to="/setting">
              <IconButton className={classes.button} aria-label="Add to shopping cart">
                <SettingsIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </li>
      </ul>
    </HeaderStyle>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);