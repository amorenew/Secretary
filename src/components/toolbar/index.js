import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text
} from 'native-base';

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
        return <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu'/>
                </Button>
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right/>
        </Header>
    }
}

index.propTypes = {
    title: PropTypes.string
};