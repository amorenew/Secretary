import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return <View style={styles.container}>
            <Text style={{color:'blue'}}>{this.state.someKey}</Text>
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
    }
});
export default HomeScreen;
