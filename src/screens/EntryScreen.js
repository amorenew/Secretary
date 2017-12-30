import React from 'react';
import { connect } from "react-redux";
import SampleAction from './../actions/SampleAction';
import TopLevelScreenComponent from './../components/TopLevelScreenComponent'
import {
    StyleSheet,
    View, Text,TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
  <TouchableOpacity style={{height:50}}>
  <LinearGradient   start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
  locations={[0,0.5,0.6]}
  colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
    <Text style={styles.buttonText}>Sign in with Facebook</Text>
  </LinearGradient>
</TouchableOpacity>

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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

