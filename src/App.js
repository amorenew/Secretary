import React from 'react';
import HomeScreen from './screens/home/index';
import LoginScreen from './screens/login/index';
import Routing, {Router} from './utilities/routing/index';
const Route = Routing.Route;
const Switch = Routing.Switch;


export default class App extends React.Component {
    render() {

        return (
            <Router>
                <Switch>
                <Route path='/login' component={LoginScreen}/>
                <Route path='/' component={HomeScreen}/>
                </Switch>
            </Router>
        );
    }
}
