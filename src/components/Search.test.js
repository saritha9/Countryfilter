import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import Search from './Search';
import App from '../App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('SearchComponent', () => {

  it('check if search bar works (case-sensitive)', () => {
    const mainWrapper = mount(<App />)
    const searchCmp = mainWrapper.find(Search).get(0);
    searchCmp.props.doSearch("Ind");
    expect(mainWrapper.state().filteredData).toEqual([ 'French West Indies', 'India', 'Indonesia' ]);
  });

  it('check if search bar works (case-insensitive)', () => {
    const mainWrapper = mount(<App />)
    const searchCmp = mainWrapper.find(Search).get(0);
    searchCmp.props.doSearch("inD");
    expect(mainWrapper.state().filteredData).toEqual([ 'French West Indies', 'India', 'Indonesia' ]);
  });
});
