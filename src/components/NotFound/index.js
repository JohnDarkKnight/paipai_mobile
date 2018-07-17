import React from 'react';
import ResultExample from '../ResultExample';

export default class NotFound extends React.Component {
    render() {
        return (
            <ResultExample
                title='页面丢失'
                message='对不起，页面找不到了...'
                icon='cross'
            />
        )
    }

}