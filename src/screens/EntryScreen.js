import React from 'react';
import {connect} from "react-redux";
import SampleAction from './../actions/SampleAction';
import TopLevelScreenComponent from './../components/TopLevelScreenComponent'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
class EntryScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Welcome to top level component of this app.',
            dispatchMessage: 'Dispatch an action to:',
            passActionDispatchValue: 1,
            failActionDispatchValue: 0
        };
        this.passDispatchedAction = this
            .passDispatchedAction
            .bind(this);
        this.failDispatchedAction = this
            .failDispatchedAction
            .bind(this)
    }

    passDispatchedAction() {
        this
            .props
            .dispatch(SampleAction(this.state.passActionDispatchValue))
    }

    failDispatchedAction() {
        this
            .props
            .dispatch(SampleAction(this.state.failActionDispatchValue))

    }

    render() {
        return (
            <View style={styles.container}>
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
                <TouchableOpacity
                    style={{
                    backgroundColor: '#1A237E',
                    borderBottomWidth: 5,
                    borderBottomColor: '#304FFE',
                    padding: 15,
                    width: 200,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                }}>
                    <Text
                        style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 28
                    }}>Learning</Text>
                </TouchableOpacity>
                <TopLevelScreenComponent
                    passDispatchedAction={this.passDispatchedAction}
                    failDispatchedAction={this.failDispatchedAction}
                    message={this.props.sampleReducer.message}/>
            </View>
        );
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
        // backgroundColor: '#000', backgroundImage: `linear-gradient(to bottom,
        // ${"#f2323f"} 0%, ${"#f2ff3f"} 100%)`,
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

function mapStateToProps(state) {
    return ({sampleReducer: state.sampleReducer})
}

export default connect(mapStateToProps)(EntryScreen);
