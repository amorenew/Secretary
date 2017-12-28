import React from 'react';
import {isMobile} from "./Cross";
const Text = (props) => {
    const {
        type = 'regular',
        lines = 1,
        color,
        style,
        center,
        right,
        transparent
    } = props;
    const textAlign = center
        ? 'center'
        : right
            ? 'right'
            : null;
    const backgroundColor = transparent
        ? 'transparent'
        : null

    if (isMobile) {
        var Text = require('react-native').Text;
        return (
            <Text
                style={[
                {
                    textAlign,
                    color,
                    backgroundColor
                },
                style
            ]}
                numberOfLines={lines}>
                {props.children}
            </Text>
        );
    } else {
        return (
            <label
                style={[
                {
                    textAlign,
                    color,
                    backgroundColor
                },
                style
            ]}
                numberOfLines={lines}>
                {props.children}
            </label>
        );
    }
}

export default Text;