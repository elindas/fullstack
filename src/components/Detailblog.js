import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { showBlogById } from "../actions";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Allblog extends Component {
  componentDidMount = () => {
    this.props.showBlogById(this.props.match.params.id);
  };

  render() {
    console.log("props Detail Blog", this.props);
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            {this.props.data !== undefined && (
              <Paper className={classes.paper}>
                <h1>{this.props.data.title}</h1>
                <p style={{ textAlign: "justify" }}>
                  {this.props.data.message}
                </p>

                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="flex-end"
                ></Grid>
              </Paper>
            )}
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.allblog.detailid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showBlogById: id => {
      dispatch(showBlogById(id));
    }
  };
};

export default withRouter(
  withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Allblog))
);
