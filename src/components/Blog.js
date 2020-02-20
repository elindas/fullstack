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
    textAlign: "center",
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
            <Link to="createblog">
              <Button
                spacing={10}
                variant="contained"
                color="primary"
                style={{
                  margin: "30px 20px"
                }}
              >
                Add Blog
              </Button>
            </Link>
          </Grid>

          {this.props.data !== undefined &&
            this.props.data.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}>
                      <h1>{item.title}</h1>
                      <p>{item.message}</p>

                      <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end"
                      >
                        <Link to={`/blog/edit/${item._id}`}>
                          <Button
                            spacing={3}
                            variant="outlined"
                            color="primary"
                          >
                            Update
                          </Button>
                        </Link>

                        <Button
                          spacing={3}
                          variant="outlined"
                          color="danger"
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
