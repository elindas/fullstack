import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import { fetchTodos } from "../actions";

class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: [0]
        };
    }

    componentDidMount = () => {
        this.props.fetchTodos();
    };
    render() {
        return (
            <List>
                {this.props.todos.map((value, index) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem key={index} role={undefined} dense button>
                            <ListItemText
                                id={labelId}
                                primary={`${value.todo}`}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="comments">
                                    <CommentIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => {
            dispatch(fetchTodos());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
