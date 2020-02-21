import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
// import Link from '@material-ui/core/Link';
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { Link } from "react-router-dom";

import { logout } from "../actions";

const styles = theme => ({
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  }
});

function Navbar(props) {
  const { classes } = props;
  
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Typography
            style={{ color: "white" }}
            variant="h6"
            underline="none"
            className={classes.title}
          >
            Impact Blog
          </Typography>
          <div className={classes.right}>
            {props.isLogin ? (
              <Fragment>
                <Button
                  component={Link}
                  to={"/"}
                  onClick={() => {
                        props.logout();
                    }}
                  color="inherit"
                  variant="text"
                  className={classes.rightLink}
                >
                  {"Sign Out"}
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Button
                  component={Link}
                  to={"/login"}
                  color="inherit"
                  variant="text"
                  size="small"
                  className={classes.rightLink}
                >
                  {"Sign In"}
                </Button>
                <Button
                  component={Link}
                  to={"/signup"}
                  variant="text"
                  className={clsx(classes.rightLink, classes.linkSecondary)}
                >
                  {"Sign Up"}
                </Button>
              </Fragment>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    isLogin: state.users.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
      logout: () => {
          dispatch(logout());
      }
  };
};
export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Navbar)));
