import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CountryList extends Component {

	render() {
		var renderedCountries = [];

		return (
  <div className='col-xs-12  col-sm-12 col-md-12 col-lg-12'>
    <ol />
  </div>
);
	}
}

// Uncomment the below snippet
// CountryList.propTypes = {
// 	countryData: PropTypes.arrayOf(PropTypes.string)
// }
export default CountryList;
