import React from 'react';
import PropTypes from 'prop-types';
// import './index.scss';

export default class extends React.Component {
    static propTypes = {
        name: PropTypes.string,
    };

    static defaultProps = {
        //
    };

    render() {
        const { name } = this.props;

        return <div>{name}</div>;
    }
}
