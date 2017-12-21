import { serviceCall } from './service';

export function loadPropertyList() {
    const url = '/api';
    return {
        type: 'LOAD_PROPERTY_LIST',
        payload: serviceCall({
            url: url,
            params: {
                _format: 'json'
            }
        })
    };
}
