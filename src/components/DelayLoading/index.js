import React from 'react';
import Loading from '../Loading';
import PageError from '../Error';

const DelayLoading = ({isLoading, error}) => {
    if (isLoading) {
        return (
            <Loading/>
        )
    } else if (error) {
        return (
            <PageError/>
        )
    } else {
        return null;
    }
};

export default DelayLoading;