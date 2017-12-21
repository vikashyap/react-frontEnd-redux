export default function PropertyList(state = {}, action) {
const temp = Object.assign({}, state);
switch (action.type) {
case "LOAD_PROPERTY_LIST":
temp.data = action.payload.data.data;
return temp;
default:
return Object.assign({}, state);
}
}
