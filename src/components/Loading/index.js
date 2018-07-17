import React from 'react';

import ResultExample from '../ResultExample';

export default class Loading extends React.Component {
    render() {
        return (
            <ResultExample
                title='加载中'
                message='请稍等，正在拼命加载中...'
                icon='loading'
            />
        )
    }

}