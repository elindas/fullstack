import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import { Formik } from "formik";
import Button from "@material-ui/core/Button";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { updateBlog, showBlogById } from "../actions";

class Updateblog extends Component {
  componentDidMount = () => {
    this.props.showBlogById(this.props.match.params.id);
  };

  render() {
    console.log("PROPS UPDATE BLOG", this.props);
    return (
      <React.Fragment>
        <Typography
          variant="h6"
          gutterBottom
          style={{
            margin: "30px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          EDIT BLOG
        </Typography>
        <Formik
          initialValues={{
            title:
              this.props.dataBlog !== undefined && this.props.dataBlog.title,
            message:
              this.props.dataBlog !== undefined && this.props.dataBlog.message
          }}
          enableReinitialize={true}
          onSubmit={(values, actions) => {
            // console.log("THIS IS VALUES", values)
            this.props.updateBlog(this.props.match.params.id, values);
            actions.resetForm();
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form
              style={{ margin: "30px 20px" }}
              noValidate
              onSubmit={handleSubmit}
            >
              <Grid container spacing={3}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="Title"
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title || " "}
                  />
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="message"
                    name="message"
                    label="Paragraphs"
                    fullWidth
                    multiline
                    rows="5"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message || "  "}
                  />
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Button
                  type="submit"
                  spacing={10}
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  style={{
                    margin: "30px 20px"
                  }}
                >
                  Edit Blog
                </Button>
                <Button
                  component={Link}
                  to="/userblog"
                  spacing={10}
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "30px 20px"
                  }}
                >
                  Back to Blog
                </Button>
              </Grid>
            </form>
          )}
        </Formik>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataBlog: state.allblog.detailid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showBlogById: id => {
      dispatch(showBlogById(id));
    },
    updateBlog: (id, values) => {
      dispatch(updateBlog(id, values));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Updateblog)
);
