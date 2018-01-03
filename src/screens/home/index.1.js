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
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignContent: 'center'
                            }}
                            onPress={() => this.onPress2()}><ImageBackground
                                source={Images.paper_parent}
                                borderRadius={10}
                                resizeMode={Image.resizeMode.stretch}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}><Text
                                    style={{
                                        width: 180,
                                        paddingVertical: 20,
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlignVertical: 'center',
                                        textAlign: 'center',
                                        color: '#000',
                                        zIndex: 0,
                                        fontFamily: 'Patrick Hand',
                                        fontSize: 38
                                    }}>Learning</Text></ImageBackground></TouchableOpacity>
                        <Animated.View
                            style={{
                                width: '100%',
                                height: this.state.fadeAnim,
                            }}>
                            <ImageBackground
                                source={Images.paper_child}
                                borderRadius={10}
                                resizeMode={Image.resizeMode.stretch}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                }}><Text
                                    style={{
                                        height: '100%',
                                        color: this.state.isExpand ? '#AAA' : '#0000000y',
                                        zIndex: 0,
                                        fontFamily: 'Patrick Hand',
                                        fontSize: 38
                                    }}>Learning</Text>
                            </ImageBackground>
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