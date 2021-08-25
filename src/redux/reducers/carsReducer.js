import  {FETCHING_CARS, FETCHING_CARS_SUCCESS,FETCHING_CARS_FAILED} from '../types/types'
import  {FETCHING_CAR, FETCHING_CAR_SUCCESS,FETCHING_CAR_FAILED} from '../types/types'



const carsReducer = (state = { cars: { loading : false , cars : [], error : ''}, car: {}, error: '' }, actions) =>{

    switch(actions.type){
        case FETCHING_CARS:
            return {
                ...state, 
                cars:{
                    ...state.cars,
                    loading:true
                }

            }
        case FETCHING_CARS_SUCCESS:
            return {
                ...state,
                cars: {
                    ...state.cars,
                    loading: false,
                    cars: actions.payload
                }
            }
            case FETCHING_CARS_FAILED:
                return{
                    ...state,
                    cars: {
                        ...state.cars,
                        loading: false,
                        error: actions.payload
                    }
            }
            case FETCHING_CAR:
                return {
                    ...state
                }
            case FETCHING_CAR_SUCCESS:
                return {
                    ...state,
                    car: actions.payload
            }
                case FETCHING_CAR_FAILED:
                    return{
                        ...state,
                        error: actions.payload
                }
        default:
            return state

    }
}
export default carsReducer;