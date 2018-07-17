import React from 'react';

import ResultExample from '../ResultExample';

export default class PageError extends React.Component {

    render() {
        return (
            <ResultExample
                title='出错了'
                message='对不起，出错了...'
                icon='cross-circle-o'
            />
        )
    }


}
