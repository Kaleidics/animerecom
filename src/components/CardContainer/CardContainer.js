import React from 'react'
import { connect } from 'react-redux';
import "./CardContainer.css";

import AnimeCard from '../AnimeCard/AnimeCard';

class CardContainer extends React.Component {


  render() {
    
    let CardList = this.props.searchResults.searchResults.results ? this.props.searchResults.searchResults.results.map(data => {
      return <AnimeCard data={data} />
    }) : null;

    return (
      <div className="card-container">
        {CardList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    searchResults: state.searchResults
});

export default connect(mapStateToProps)(CardContainer);
