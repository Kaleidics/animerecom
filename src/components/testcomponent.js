import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/index';

class TestComponent extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchSearch('/anime?q=zero'));
    }

    render() {
        console.log(this.props.searchResults);
        return <div>hi</div>;
    }
}

const mapStateToProps = (state) => ({
    searchResults: state.searchResults,
});

export default connect(mapStateToProps)(TestComponent);
