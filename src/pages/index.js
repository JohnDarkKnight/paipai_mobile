import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import {mainRoute} from '../config/routes';

export default class MainRoutes extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    {
                        mainRoute.map((item, index) => <Route key={`routes_key_${index}`} {...item}/>)
                    }
                </Switch>
            </Router>
        )
    }


}