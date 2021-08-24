import {FETCHING_CARS, FETCHING_CARS_SUCCESS,FETCHING_CARS_FAILED} from '../types/types'


export const fetchingCars = () =>{
    return {
        type: FETCHING_CARS
    }
} 

export const fetchingCarsSuccess = (cars) =>{
    return {
        type: FETCHING_CARS_SUCCESS,
        payload: cars
    }
}

export const fetchingCarsFailed = (error) =>{
    return {
        type : FETCHING_CARS_FAILED,
        payload : error
    }
}


export const fetchingCarsRequest = () => async (dispatch) => {
    dispatch(fetchingCars());

	try {
		const data = await fetch('https://my-json-server.typicode.com/marville001/json-server/vehicles');
		const response = await data.json();
		dispatch(fetchingCarsSuccess(response));
	} catch ({ message }) {
		dispatch(fetchingCarsFailed(message));
	}
}