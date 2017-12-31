import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,ScrollView} from 'react-native';
// import Panel from './../components/Panel'
import Collapsible from 'react-native-collapsible';

class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return <View style={styles.container}>
            <TouchableOpacity
                style={{
                backgroundColor: '#404A6A',
                borderTopLeftRadius:25,
                borderBottomRightRadius:25,
                borderLeftWidth: 2,
                borderColor: '#448AFF',
                borderTopWidth: 5,
                borderBottomWidth: 5,
                borderRightWidth: 2,
                padding: 15,
                width: 200,
                borderRadius:10,
            }}>
                <Text
                    style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 28
                }}>Learning</Text>
            </TouchableOpacity>

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
        backgroundColor: '#2C3451',
        // backgroundImage: `linear-gradient(to bottom, ${"#f2323f"} 0%, ${"#f2ff3f"}
        // 100%)`,
    }
});
export default HomeScreen;
