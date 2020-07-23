import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../../actions/index';

import { MdSearch } from 'react-icons/md';

import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchValue: '',
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
       
        
    }

   
    handleInput(e) {
        this.setState({ searchValue: e.target.value });
    }

    handleSearch(e) {
        e.preventDefault();
        let formattedSearch = '/anime?q=' + this.state.searchValue;
        this.props.dispatch(fetchSearch(formattedSearch));
    }

    render() {
        console.log(this.props.searchResults);
        return (
            <div className='search-bar'>
                <form className='search-bar__form' onSubmit={this.handleSearch}>
                    <div className='search-bar__input-container'>
                        <MdSearch className='search-bar__icon' />
                        <input
                            className='search-bar__input'
                            type='text'
                            value={this.state.searchValue}
                            onChange={this.handleInput}
                        />
                    </div>
                </form>
                <div className="search-bar__actions">
                    <button type='submit' className='search-bar__btn btn--search' onClick={this.handleSearch}>
                        Search
                    </button>
                    <button type='submit' className='search-bar__btn btn--option'>
                        Something Specific
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    searchResults: state.searchResults,
});

export default connect(mapStateToProps)(SearchBar);
