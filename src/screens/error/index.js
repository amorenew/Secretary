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

class index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            isExpand: false
        }
    }

    onPress2 = () => {
        this.props.history.push('/login');
    }
    render() {
        return (
            <View style={styles.container}>
            <View style={{width:'100%',padding:7,alignItems:'flex-start'}}>
                <Image
                    resizeMode={Image.resizeMode.contain}
                    style={{
                    height: 35,
                    width: 35
                }}
                    source={Images.menu}/>
                    </View>
                <ScrollView
                    contentContainerStyle={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                }}>
                    <ImageButton
                        onPress={() => this.onPress2()}
                        title={"Error Page"}
                        colors={['#70B5FF', '#558ED2', '#487EC7']}
                        style={{
                        margin: 10,
                        width: 280,
                        height: 100
                    }}
                        image={Images.learning}
                        fontSize={38}/>
                  
                </ScrollView>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        maxWidth: 800,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'black'
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