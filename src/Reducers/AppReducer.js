import {
    FETCHING_IMAGES,
    FETCHING_IMAGES_SUCCESS
} from './../utils/ActionTypes'

const initialState = {
    isFetching : null,
    data: [],
    query: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCHING_IMAGES: 
            return Object.assign({}, state, {
                isFetching: true,
                query: action.payload
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