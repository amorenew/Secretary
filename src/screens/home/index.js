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
                        <ImageBackground
                            source={Images.paper}
                            resizeMode={Image.resizeMode.stretch}
                            style={{
                            width: 200,
                            height: 100,margin:30,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}><Text
                                style={{
                                color: 'blue',
                                zIndex: 0,   fontFamily: 'Patrick Hand',
                                fontSize: 38
                            }}>Learning</Text>
                        </ImageBackground>
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