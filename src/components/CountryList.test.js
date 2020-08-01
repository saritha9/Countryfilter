import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import Search from './Search';
import CountryList from './CountryList';
import App from '../App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('CountryListComponent', () => {

  it('check the number of rows that are rendered', () => {
    const countryWrapper = mount(<CountryList countryData={['French West Indies', 'India', 'Indonesia']} />)
    const listTags = countryWrapper.find("li");
    expect(listTags.length).toEqual(3);
  });

});
