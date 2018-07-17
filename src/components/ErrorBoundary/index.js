import React from 'react'
import ErrorPage from '../Error';

export default class ErrorBoundary extends React.Component {

    state = {hasError: false};

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorPage/>
            );
        }
        return this.props.children;
    }
}