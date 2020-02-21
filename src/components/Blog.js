import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";
import { fetchBlog, deleteBlog } from "../actions";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: theme.palette.text.secondary
  }
});

class Blog extends Component {
  componentDidMount = () => {
    this.props.fetchBlog();
  };

  handleDelete = id => {
    console.log("kepanggil", id);
    this.props.deleteBlog(id);
    this.props.fetchBlog();
  };

  render() {
    console.log("this is props", this.props);
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid container spacing={3}>
            <Button
              component={Link}
              to="createblog"
              spacing={10}
              variant="contained"
              color="primary"
              style={{
                margin: "30px 30px"
              }}
            >
              Add Blog
            </Button>
          </Grid>

          {this.props.data !== undefined &&
            this.props.data.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={5}>
                      <h1 style={{ textAlign: "center" }}>{item.title}</h1>
                      <p>{item.message}</p>

                      <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end"
                      >
                        <Button
                          component={Link}
                          to={`/blog/edit/${item._id}`}
                          style={{
                            marginRight: "20px"
                          }}
                          
                          variant="outlined"
                          color="primary"
                        >
                          Update
                        </Button>

                        <Button
                          
                          variant="outlined"
                          color="secondary"
                          onClick={() => {
                            this.handleDelete(item._id);
                          }}
                        >
                          Delete
                        </Button>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}></Grid>
                </Fragment>
              );
            })}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.blog.data.blog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBlog: () => dispatch(fetchBlog()),
    deleteBlog: id => dispatch(deleteBlog(id))
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Blog)
);
