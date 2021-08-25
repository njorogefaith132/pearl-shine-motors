import  {FETCHING_CARS, FETCHING_CARS_SUCCESS,FETCHING_CARS_FAILED, ADD_TO_CART, INCREMENT_CART, DECREMENT_CART} from '../types/types'
import  {FETCHING_CAR, FETCHING_CAR_SUCCESS,FETCHING_CAR_FAILED} from '../types/types'


const initialState = { 
    cars: { loading : false , cars : [], error : ''},
     car: {}, 
     error: '', 
     cart:[] 
}
const carsReducer = (state = initialState, actions) =>{

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

            case ADD_TO_CART:
                const itemInCart = state.cart.find(c=>c.id===actions.payload);
                const item = state.cars.cars.find(car=>car.id===actions.payload)
                if(itemInCart) return state
                return{
                        ...state,
                        cart:[...state.cart, {...item, quantity:1}]
                }

            case INCREMENT_CART:
                const items = state.cart.map(c=>{
                    if(c.id===actions.payload){
                        c.quantity++
                    }
                    return c;
                });
                return{
                        ...state,
                        cart:[...items]
                }

                case DECREMENT_CART:
                    const items1 = state.cart.map(c=>{
                        if(c.id===actions.payload){
                            c.quantity>1 && c.quantity--
                        }
                        return c;
                    });
                    return{
                            ...state,
                            cart:[...items1]
                    }
        default:
            return state

    }
}
export default carsReducer;