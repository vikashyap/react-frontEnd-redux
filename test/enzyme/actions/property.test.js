import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import * as actions from '../../../src/actions/property-list'
import store from '../../../src/reducers/store';

describe('Property Actions', () => {
    it('should run Property with results', () => {
        store.dispatch(actions.loadPropertyList()).then(result => {
            expect(result.type).toEqual('LOAD_PROPERTY_LIST')
        })
    });
   

   
});