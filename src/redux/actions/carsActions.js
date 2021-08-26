import {FETCHING_CARS, FETCHING_CARS_SUCCESS,FETCHING_CARS_FAILED, ADD_TO_CART, INCREMENT_CART, DECREMENT_CART} from '../types/types'
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
		const data = await fetch('https://my-json-server.typicode.com/njorogefaith132/db/cars');
		const response = await data.json();
		dispatch(fetchingCarsSuccess(response));
	} catch ({ message }) {
		dispatch(fetchingCarsFailed(message));
	}
}

export const fetchingCarRequest = (id) => async (dispatch) => {
    dispatch({ type: FETCHING_CAR });

	try {
		const data = await fetch(`https://my-json-server.typicode.com/njorogefaith132/db/cars/${id}`);
		const response = await data.json();
		dispatch({type: FETCHING_CAR_SUCCESS, payload: response});
	} catch ({ message }) {
		dispatch({type: FETCHING_CAR_FAILED, payload: message});
	}
}


export const addToCart = (id) =>{
	return {
			type: ADD_TO_CART,
			payload: id
	}
}

export const incrementCart = (id) =>{
	return {
			type: INCREMENT_CART,
			payload: id
	}
}

export const decrementCart = (id) =>{
	return {
			type: DECREMENT_CART,
			payload: id
	}
}