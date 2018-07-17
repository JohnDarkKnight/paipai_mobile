import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import './index.css';
import MainRoute from './pages';
import stores from './stores';

import {AsyncErrorBoundary} from './config/routes';
import registerServiceWorker from './registerServiceWorker';


class App extends React.Component {
    render() {
        return (
            <AsyncErrorBoundary>
                <Provider {...stores}>
                    <MainRoute/>
                </Provider>
            </AsyncErrorBoundary>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
