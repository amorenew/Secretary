import React from 'react';
import PropTypes from 'prop-types';

import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';


export default class index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            title,
            style,
            ...otherProps
        } = this.props;
        return <AppBar position="static">
            <Toolbar>
                <IconButton
                    style={{
                    marginLeft: -12,
                    marginRight: 20
                }}
                    color="contrast"
                    aria-label="Menu">
                    <MenuIcon/>
                </IconButton>
                <Typography
                    type="title"
                    color="inherit"
                    style={{
                    flex: 1
                }}>{title}</Typography>
                <Button color="contrast">Login</Button>
            </Toolbar>
        </AppBar>
    }
}

index.propTypes = {
    title: PropTypes.string,
};