import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient'

class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return <View style={styles.container}>
            <LinearGradient
                start={{
                x: 0.0,
                y: 0.0
            }}
                end={{
                x: 0.0,
                y: 1.0
            }}
                locations={[0, 0.5, 0.9]}
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    Sign in with Facebook
                </Text>
            </LinearGradient>
        </View>;
    }

    componentDidMount() {
        this.setState({someKey: 'otherValue'});
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        // backgroundImage: `linear-gradient(to bottom, ${"#f2323f"} 0%, ${"#f2ff3f"}
        // 100%)`,
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: 250,
        height: 50
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
export default HomeScreen;
