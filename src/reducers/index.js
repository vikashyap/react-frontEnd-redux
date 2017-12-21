import { combineReducers } from 'redux';
import PropertyList from './property-list';

const rootReducer = combineReducers({
propertyList: PropertyList
});
export default rootReducer;

