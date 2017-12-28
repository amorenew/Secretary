import React from 'react';
import {isMobile} from "./Cross";
// import platform from 'platform'
//  function isMobile() {
//     if (platform.name) {
//         console.log("sdfsdsd")
//         console.log(platform.name)
//         return false
//     } else {
//         console.log("sss")
//         console.log("wrqqq")
//         return true
//     }
// }
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
    // console.log(isMobile())
    if (isMobile()) {
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
            ]}>{props.children}</label>
        );
    }
}

export default Text;