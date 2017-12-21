import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../../src/components/App/app';
import Grid from '../../../src/components/Grid/grid';
import Header from '../../../src/components/Header/header';
import Tiles from "../../../src/components/Tiles/tiles-detail";
import Address from "../../../src/components/Tiles/address-summary";
import Button from "../../../src/components/Button/button";
import Loader from "../../../src/components/loader/loader";
import Pagination from "../../../src/components/Pagination/pagination";
import MockPropertyItem from '../Mock-Data/property-mock.json';


Enzyme.configure({ adapter: new Adapter() });
describe('Property Component', function() {
	it("should render Grid Component without errors", () => {
	    let wrapperGrid = shallow(<Grid />);
	    expect(wrapperGrid.length).toEqual(1);
  	});
  	it("should render Header Component without errors", () => {
	    let wrapperHeader = shallow(<Header />);
	    expect(wrapperHeader.length).toEqual(1);
  	});
  	it("should render Tiles Component without errors", () => {
	    let wrapperTiles = shallow(<Tiles tileDetail={MockPropertyItem[0]}  />);
	    expect(wrapperTiles.length).toEqual(1);
  	});
  	it("should render Address Component without errors", () => {
	    let wrapperAddress = shallow(<Address tileDetail={MockPropertyItem[0]}  />);
	    expect(wrapperAddress.length).toEqual(1);
  	});
  	it("should render Button Component without errors", () => {
	    let wrapperButton = shallow(<Button btnText={"btnText"}  />);
	    expect(wrapperButton.length).toEqual(1);
  	});
  	it("should render Loader Component without errors", () => {
	    let wrapperLoader = shallow(<Loader />);
	    expect(wrapperLoader.length).toEqual(1);
  	});
  	it("should render Pagination Component without errors", () => {
	    let wrapperPagination = shallow(<Pagination />);
	    expect(wrapperPagination.length).toEqual(1);
  	});
});