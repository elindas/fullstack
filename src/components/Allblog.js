import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {Link} from 'react-router-dom';
import { fetchTodos } from "../actions";

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Allblog extends Component {
    
    
    componentDidMount = () => {
        this.props.fetchTodos();
    };

    render() {
       
       console.log(this.props);
       const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {this.props.data.map((value, index) => {
                       return (
                        <Fragment key={index}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <h1>{value.title}</h1>
                                <p style={{textAlign:"left"}}>Author : {`${value.user.firstName} ${value.user.lastName}`}</p>
                                <p style={{textAlign:"justify"}}>{value.message}</p>
                                
                                
                                <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="flex-end"
                                >
                                    <Link to={`/${value._id}`}><Button variant="outlined" color="primary">Read More</Button></Link>
                                
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}></Grid>
                        
                        </Fragment>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    data: state.allblog.data
    };
};


const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => {
            dispatch(fetchTodos());
        }
    };
};

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Allblog))
