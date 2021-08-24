import  {FETCHING_CARS, FETCHING_CARS_SUCCESS,FETCHING_CARS_FAILED} from '../types/types'



const carsReducer = (state = { loading : false , cars : [], error : ''}, actions) =>{

    switch(actions.type){
        case FETCHING_CARS:
            return {
                ...state, 
                loading :true

            }
        case FETCHING_CARS_SUCCESS :
            return {
                ...state,
                loading: false,
                cars: actions.payload
            }
            case FETCHING_CARS_FAILED:
                return{
                    ...state,
                    loading: false,
                error: actions.payload
            }
        default:
            return state

    }
}
export default carsReducer;