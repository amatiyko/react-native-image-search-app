import { 
    bingApiUrl,
    bingKey
} from './../utils/consts';
import { 
    FETCHING_IMAGES,
    FETCHING_IMAGES_SUCCESS
} from './../utils/ActionTypes';

export default function FetchingImages(query) {
    return dispatch => {
        dispatch({ type: FETCHING_IMAGES, payload: query });
        
        let response = fetch(bingApiUrl + `?q=${query}&subscription-key=${bingKey}`);
        return response
            .then( res => res.json() ) 
            .then (data => {
                dispatch({ type: FETCHING_IMAGES_SUCCESS, payload: data.value})
            })
    }
}