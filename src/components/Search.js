import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

  counstructor() {
  }

    // complete this function which handles the search query
	filterCountriesHelper(e) {
	}

	render() {
		return (
  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
    <span className='searchbox-icon'>
      <i className='fa fa-search' />
    </span>
    <input className='fullwidth search' type='text' />
  </div>
);
	}
}

// Uncomment the below snippet
// Search.propTypes = {
// 	doSearch: PropTypes.func
// }

export default Search;
