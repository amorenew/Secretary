import React from 'react';
import PropTypes from 'prop-types';
import {View, Platform} from 'react-native';
import {StyleSheet, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class ImageButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            onPress,
            title,
            fontSize,
            colors,
            image,
            style,
            ...otherProps
        } = this.props;

        return (
            <TouchableOpacity
                style={[
                {
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                style
            ]}
                onPress={onPress}>
                <LinearGradient
                    colors={colors}
                    style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    padding: 3,
                    zIndex: 1
                }}>
                    <ImageBackground
                        source={image}
                        resizeMode={Image.resizeMode.contain}
                        style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text
                            style={{
                            zIndex: 1,
                            color: 'white',
                            fontSize: fontSize
                        }}>{title}</Text>
                    </ImageBackground>
                </LinearGradient>
            </TouchableOpacity>
        );
    }

}

ImageButton.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    fontSize: PropTypes.number,
    colors: PropTypes.array,
    image: PropTypes.any
};