import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground,
    Image,
    ScrollView,
    Animated
} from 'react-native';
import ElevatedView from './../../components/ElevatedView'
import Images from './../../constants/Images'
import LinearGradient from 'react-native-linear-gradient';

class index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            isExpand: false
        }
    }

    onPress2 = () => {
        var expandTo = this.state.isExpand
            ? 0
            : 100
        Animated
            .timing(this.state.fadeAnim, {
                toValue: expandTo,
                duration: 800
            })
            .start(() => {
                this.setState((state) => ({
                    isExpand: !state.isExpand
                }));
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={Images.paper2}
                    resizeMode={Image.resizeMode.stretch}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <ScrollView>
                        <TouchableOpacity
                            style={{
                                width: 250,
                                height: 130,
                                padding: 5,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={() => this.onPress2()}>
                            <LinearGradient
                                colors={['#5E98D9', '#558ED2', '#487EC7']}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    borderRadius: 10,
                                    zIndex: 1
                                }}>
                                <ImageBackground
                                    source={Images.learning}
                                    resizeMode={Image.resizeMode.contain}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            zIndex: 0,
                                            fontSize: 38
                                        }}>Learning</Text>
                                </ImageBackground>
                            </LinearGradient>
                        </TouchableOpacity>
                        <Animated.View
                            style={{
                                width: '100%',
                                height: this.state.fadeAnim,
                                zIndex: 10
                            }}>
                            <LinearGradient
                                colors={['#AAA', '#CCC', '#EEE']}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                    borderRadius: 5,
                                }}><Text
                                    style={{
                                        width: '100%',
                                        color: this.state.isExpand ? 'black' : 'rgba(0,0,0,0)',
                                        fontSize: 25, textAlign: 'left'
                                    }}>Physics: Chapter 2</Text><Text
                                        style={{
                                            width: '100%',
                                            color: this.state.isExpand ? 'black' : 'rgba(0,0,0,0)',
                                            fontSize: 25
                                        }}>Math: Chapter 3</Text></LinearGradient>
                        </Animated.View>

                    </ScrollView>
                </ImageBackground>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },

    stayElevated: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: 'white'
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent'
    }
});
export default index;