import React from 'react';
import { connect } from "react-redux";
import SampleAction from './../actions/SampleAction';
import TopLevelScreenComponent from './../components/TopLevelScreenComponent'
import {
    StyleSheet,
    View, Text,TouchableOpacity
} from 'react-native';
// import LinearGradientCross from './LinearGradientCross';

class EntryScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Welcome to top level component of this app.',
            dispatchMessage: 'Dispatch an action to:',
            passActionDispatchValue: 1,
            failActionDispatchValue: 0,
        };
        this.passDispatchedAction = this.passDispatchedAction.bind(this);
        this.failDispatchedAction = this.failDispatchedAction.bind(this)
    }

    passDispatchedAction() {
        this.props.dispatch(SampleAction(this.state.passActionDispatchValue))
    }

    failDispatchedAction() {
        this.props.dispatch(SampleAction(this.state.failActionDispatchValue))

    }

    render() {

        return (
            <View style={styles.container}>
                <TopLevelScreenComponent
                    passDispatchedAction={this.passDispatchedAction}
                    failDispatchedAction={this.failDispatchedAction}
                    message={this.props.sampleReducer.message}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'absolute',
        height:'100%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        // backgroundImage: `linear-gradient(to bottom, ${"#f2323f"} 0%, ${"#f2ff3f"} 100%)`,
    }, linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

function mapStateToProps(state) {
    return ({
        sampleReducer: state.sampleReducer
    }

    )
}

export default connect(mapStateToProps)(EntryScreen);

