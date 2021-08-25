import {FETCHING_CARS, FETCHING_CARS_SUCCESS,FETCHING_CARS_FAILED} from '../types/types'
import {FETCHING_CAR, FETCHING_CAR_SUCCESS,FETCHING_CAR_FAILED} from '../types/types'


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

export const fetchingCarRequest = (id) => async (dispatch) => {
    dispatch({ type: FETCHING_CAR });

	try {
		const data = await fetch(`https://my-json-server.typicode.com/marville001/json-server/vehicles/${id}`);
		const response = await data.json();
		dispatch({type: FETCHING_CAR_SUCCESS, payload: response});
	} catch ({ message }) {
		dispatch({type: FETCHING_CAR_FAILED, payload: message});
	}
}