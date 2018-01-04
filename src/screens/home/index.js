import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    Animated
} from 'react-native';
import ElevatedView from './../../components/ElevatedView'
import ImageButton from './../../components/ImageButton'
import InviteView from './../../components/InviteView'
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
            : 180

        Animated
            .timing(this.state.fadeAnim, {
            toValue: expandTo,
            duration: 800,
            useNativeDriver: true
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
                    <ScrollView
                        contentContainerStyle={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden'
                    }}>
                        <ImageButton
                            onPress={() => this.onPress2()}
                            title={"Learning"}
                            colors={['#70B5FF', '#558ED2', '#487EC7']}
                            style={{
                            margin: 10,
                            width: 280,
                            height: 100
                        }}
                            image={Images.learning}
                            fontSize={38}/>
                        <ImageButton
                            style={{
                            margin: 10,
                            width: 280,
                            height: 100
                        }}
                            onPress={() => this.onPress2()}
                            title={"Sport"}
                            colors={['#E09898', '#DB4646', '#C90000']}
                            image={Images.sport}
                            fontSize={38}/>

                        <Animated.View
                            style={{
                            width: 280,
                            height: this.state.fadeAnim,
                            zIndex: 10,
                            flexDirection: 'col'
                        }}>
                            <InviteView
                                style={{
                                margin: 10
                            }}
                                isExpand={this.state.isExpand}
                                onPress={() => this.onPress2()}
                                title={"Sport"}
                                colors={['#E5E5E5', '#EFEFEF', '#EAEAEA']}
                                fontSize={38}/>
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