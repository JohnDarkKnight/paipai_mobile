import React from 'react';
import {Result, Icon} from 'antd-mobile';
import PropTypes from 'prop-types';

import './index.css';

export default class ResultExample extends React.Component {

    static  propTypes = {
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        fill: PropTypes.string,
    };

    static defaultProps = {
        fill: '#1F90E6',
    };

    render() {
        const {title, message, icon, fill} = this.props;
        return (
            <div className='result-example'>
                <Result
                    img={<Icon type={icon} sizes='lg' className='spe' style={{fill: fill}}/>}
                    title={title}
                    message={message}
                />
            </div>
        )
    }
}