import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    Animated,
    Platform
} from 'react-native';
import ElevatedView from './../../components/ElevatedView'
import ImageButton from './../../components/ImageButton'
import InviteView from './../../components/InviteView'
import Images from './../../constants/Images'
import LinearGradient from 'react-native-linear-gradient';
import Toolbar from './../../components/toolbar/index'
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
                <LinearGradient
                    style={{
                    width: '100%',
                    height: '100%'
                }}
                    colors={['#70B5FF', '#558ED2', '#487EC7']}>
                    <Toolbar title={"Menu Screen"}/>
                    <View
                        style={{
                        width: '100%',
                        padding: 7,
                        alignItems: 'flex-start'
                    }}>
                        <Image
                            resizeMode={Image.resizeMode.contain}
                            style={{
                            height: 30,
                            width: 20
                        }}
                            source={Images.close}/>

                    </View>
                    <ImageButton
                        onPress={() => this.props.history.push('login')}
                        title={"Learning"}
                        colors={['#70B5FF', '#558ED2', '#487EC7']}
                        style={{
                        margin: 10,
                        width: 280,
                        height: 100
                    }}
                        image={Images.test1}
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
                        image={Images.test2}
                        fontSize={38}/>
                    <Image
                        resizeMode={Image.resizeMode.contain}
                        style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        bottom: 0,
                        height: 200,
                        width: 300
                    }}
                        source={Images.cloud}/>
                </LinearGradient>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        maxWidth: Platform.OS === 'web'
            ? 400
            : '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: 'rgb(0,0,200)'
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