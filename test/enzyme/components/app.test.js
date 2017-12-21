import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../../src/components/App/app';
import Header from '../../../src/components/Header/header';
import Properties from '../../../src/components/Property/property-list';
import store from '../../../src/reducers/store';
Enzyme.configure({ adapter: new Adapter() });
describe('App Component', function() {
	it("should render App Component without errors", () => {
	    let wrapperApp = shallow(<App />);
	    expect(wrapperApp.length).toEqual(1);
  	});
  	it("should render Property Component without errors", () => {
	    let wrapperProperty = shallow(<Properties store={store}/>);
	    expect(wrapperProperty.length).toEqual(1);
  	});

});



 

