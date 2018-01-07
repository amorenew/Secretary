import React from 'react';
import PropTypes from 'prop-types';
import {View, Platform} from 'react-native';
import {StyleSheet, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from './../constants/Images'
export default class InviteView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            onPress,
            title,
            fontSize,
            colors,
            isExpand,
            image,
            style,
            ...otherProps
        } = this.props;

        return (

            <LinearGradient
                colors={isExpand
                ? colors
                : ['rgba(255,255,255,0)', 'rgba(255,255,255,0)', 'rgba(255,255,255,0)']}
                style={[
                {
                    width: '100%',
                    height: isExpand
                        ? '100%'
                        : 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    paddingVertical:10,
                    paddingLeft:5,
                    zIndex: 1
                },
                style
            ]}>
                    <Text
                        style={{
                        padding: 5,
                        width: '100%',
                        height: isExpand
                            ? '100%'
                            : 0,
                        zIndex: 1,
                        color: 'black',
                        fontSize: isExpand
                            ? 18
                            : 0
                    }}>Sports
                        not yet exist.It will be in Phase 2 after the app reach 5000 installs. By
                        inviting your freinds we could reach this goal easy.</Text>
                    <TouchableOpacity
                        style={[{
                            width: 160,
                            height: isExpand
                                ? 50
                                : 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: isExpand
                                ? '#FF3776'
                                : 'rgba(0,0,0,0)',
                            borderBottomLeftRadius: 10,
                            borderTopLeftRadius: 10,
                            borderBottomRightRadius:1,
                            paddingVertical:8,
                            alignSelf: 'flex-end',
                            marginTop: '5%'
                        }
                    ]}
                        onPress={onPress}>
                        <Image
                            style={{
                            width: 40,
                            height: isExpand
                                ? '100%'
                                : 0,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        resizeMode={Image.resizeMode.contain}
                            source={Images.invite}/>
                        <Text
                            style={{
                            zIndex: 1,
                            color: isExpand
                                ? 'white'
                                : 'rgba(0,0,0,0)',
                            fontSize: isExpand
                                ? 16
                                : 0
                        }}>Firebase Invites</Text>
                    </TouchableOpacity>
            </LinearGradient>
        );
    }

}

InviteView.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    fontSize: PropTypes.number,
    colors: PropTypes.array,
    image: PropTypes.object,
    isExpand: PropTypes.bool
};