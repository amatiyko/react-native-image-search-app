import {
    FETCHING_IMAGES,
    FETCHING_IMAGES_SUCCESS
} from './../utils/ActionTypes'

const initialState = {
    isFetching : null,
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCHING_IMAGES: 
            return Object.assign({}, state, {
                isFetching: true
            })
        case FETCHING_IMAGES_SUCCESS: 
            return Object.assign({}, state, {
                isFetching:false,
                data: action.payload
            })
        default:
            return state;
    }
}