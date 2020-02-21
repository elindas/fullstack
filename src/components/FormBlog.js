import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import { Formik } from "formik";
import Button from "@material-ui/core/Button";

import { postDataBlog } from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


function FormBlog(props) {
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
                Post a new blog
            </Typography>
            <Formik
                initialValues={{ title: "", message: "" }}
                onSubmit={(values) => {
                    props.postDataBlog(values, props.history);
                }}
            >
                {props => (
                    <form
                        style={{ margin: "30px 20px" }}
                        noValidate
                        onSubmit={props.handleSubmit}
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
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.title}
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
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.message}
                                />
                            </Grid>
                            <Grid item xs={3}></Grid>
                        </Grid>
                        <Grid style={{
                                
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                        <Button
                            type="submit"
                            spacing={10}
                            variant="contained"
                            color="primary"
                            disabled={props.isSubmitting}
                            style={{
                                margin: "30px 20px",
                                
                            }}
                        >
                            Add Blog
                        </Button>
                        </Grid>
                    </form>
                )}
            </Formik>
        </React.Fragment>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        postDataBlog: (values, history) => {
            dispatch(postDataBlog(values, history ));
        }
    };
};

export default withRouter(connect(null, mapDispatchToProps)(FormBlog));
