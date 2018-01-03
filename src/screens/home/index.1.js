import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
    Image,
    ScrollView,
    Animated
} from 'react-native';
import ElevatedView from './../../components/ElevatedView'
import Images from './../../constants/Images'
import LinearGradient from 'react-native-linear-gradient';
// import Panel from './../../components/Panel'; import Accordion from
// 'react-native-collapsible/Accordion'; import Collapsible from
// 'react-native-collapsible'; import Collapsible from './Collapsible'; import
// Animated from 'animated'
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
            ? 30
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
                    source={Images.learning}
                    resizeMode={Image.resizeMode.contain}
                    style={{
                    width: '100%',zIndex:20,
                    height: '100%',position:'absolute',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <LinearGradient
                        colors={['#AAAAAA', '#AADBBA', '#DBBAAA', '#DBBADD', '#DB2AA2']}
                        style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 10
                    }}>

                        <ScrollView>
                            <ElevatedView elevation={8} style={styles.stayElevated}/>

                            <TouchableOpacity
                                style={{
                                width: 250,
                                height: 130,
                                padding: 10,
                                justifyContent: 'center',
                                backgroundColor: 'black',
                                alignItems: 'center'
                            }}
                                onPress={() => this.onPress2()}></TouchableOpacity>
                            <Animated.View
                                style={{
                                width: '100%',
                                height: this.state.fadeAnim
                            }}>
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
                            </Animated.View>
                            <TouchableOpacity
                                style={{
                                width: 250,
                                height: 130,
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                                onPress={() => alert("sfd")}>
                                <LinearGradient
                                    colors={['#5E98D9', '#558ED2', '#487EC7']}
                                    style={{
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    borderRadius: 10
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
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={['#4c669f', '#3b5998', '#192f6a']}
                                    style={styles.linearGradient}>
                                    <Text style={styles.buttonText}>Sign in with Facebook</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <View
                                style={{
                                height: 100,
                                width: 100,
                                shadowOpacity: 0.75,
                                shadowRadius: 5,
                                shadowColor: 'blue',
                                shadowOffset: {
                                    height: 0,
                                    width: 0
                                }
                            }}>
                                <View
                                    style={{
                                    height: 100,
                                    width: 100,
                                    shadowOpacity: 0.75,
                                    shadowRadius: 5,
                                    shadowColor: 'green',
                                    shadowOffset: {
                                        height: -5,
                                        width: -5
                                    }
                                }}/>
                            </View>
                        </ScrollView>
                    </LinearGradient>
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