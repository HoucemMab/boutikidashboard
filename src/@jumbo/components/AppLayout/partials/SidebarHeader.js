import React, { useContext } from 'react';
import { MenuItem, MenuList, Paper, Popover, Typography } from '@material-ui/core';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useDispatch } from 'react-redux';
import { AuhMethods } from '../../../../services/auth';
import { CurrentAuthMethod } from '../../../constants/AppConstants';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarThemeContext from '../../../../@coremat/CmtLayouts/SidebarThemeContext/SidebarThemeContext';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '30px 16px 12px 16px',
    borderBottom: props => `solid 1px ${props.sidebarTheme.borderColor}`,
  },
  userInfo: {
    paddingTop: 24,
    transition: 'all 0.1s ease',
    height: 75,
    opacity: 1,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      height: 0,
      paddingTop: 0,
      opacity: 0,
      transition: 'all 0.3s ease',
    },
  },
  userTitle: {
    color: props => props.sidebarTheme.textDarkColor,
    marginBottom: 8,
  },
  userSubTitle: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 0.25,
  },
}));

const SidebarHeader = () => {
  const { sidebarTheme } = useContext(SidebarThemeContext);
  const classes = useStyles({ sidebarTheme });
  const dispatch = useDispatch();
  function decodeJWT(token) {
    const [headerEncoded, payloadEncoded, signature] = token.split('.');
    const header = JSON.parse(atob(headerEncoded));
    const payload = JSON.parse(atob(payloadEncoded));

    return { header, payload, signature };
  }
  const token = localStorage.getItem('dashboardtoken');
  const decoded = decodeJWT(token);
  console.log(token);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  function extractFirstPartOfEmail(email) {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      return email.substring(0, atIndex);
    }
    return email; // Return the entire email if '@' is not found
  }

  const open = Boolean(anchorEl);

  const onLogoutClick = () => {
    handlePopoverClose();
    dispatch(AuhMethods[CurrentAuthMethod].onLogout());
  };

  return (
    <div className={classes.root}>
      <CmtAvatar
        src={
          'data:image/jpeg;base64,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'
        }
        alt="User Avatar"
      />
      <div className={classes.userInfo} onClick={handlePopoverOpen}>
        <div
          className="pointer"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <div className="mr-2">
            <Typography className={classes.userTitle} component="h3" variant="h6">
              Hello {extractFirstPartOfEmail(decoded?.payload.email)} !
            </Typography>
            <Typography className={classes.userSubTitle}>{decoded?.payload.email}</Typography>
          </div>
          <ArrowDropDownIcon />
        </div>
      </div>

      {open && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          container={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}>
          <Paper elevation={8}>
            <MenuList>
              <MenuItem onClick={handlePopoverClose}>
                <PersonIcon />
                <div className="ml-2">Profile</div>
              </MenuItem>
              <MenuItem onClick={handlePopoverClose}>
                <SettingsIcon />
                <div className="ml-2">Settings</div>
              </MenuItem>
              <MenuItem onClick={onLogoutClick}>
                <ExitToAppIcon />
                <div className="ml-2">Logout</div>
              </MenuItem>
            </MenuList>
          </Paper>
        </Popover>
      )}
    </div>
  );
};

export default SidebarHeader;
