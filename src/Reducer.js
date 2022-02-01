import { ADD, ADD_CHEESE, ADD_MEAT, ADD_TAMATO, ADD_VEGETABLE, REMOVE, REMOVE_CHEESE, REMOVE_MEAT, REMOVE_TAMATO, REMOVE_VEGETABLE } from "./Types";


const Reducer=(state = { counter : 0 , meat :1 ,cheese : 1,vegetable :1, tamato: 1 },action)=>{
        switch (action.type) {
        case ADD_MEAT:
                return {...state, meat:state.meat + 1};
        case REMOVE_MEAT:
                return {...state, meat:state.meat - 1};
        case ADD_CHEESE:
                return {...state, cheese:state.cheese + 1};
        case REMOVE_CHEESE:
                return {...state, cheese:state.cheese - 1};
        case ADD_VEGETABLE:
                return {...state, vegetable:state.vegetable + 1};
        case REMOVE_VEGETABLE:
                return {...state, vegetable:state.vegetable - 1};
        case ADD_TAMATO:
                return {...state, tamato:state.tamato + 1};
        case REMOVE_TAMATO:
                return {...state, tamato:state.tamato - 1};
        case ADD:
                return {...state, counter:state.counter + 1};
        case REMOVE:
                return {...state, counter:state.counter - 1};      
         default:return state;
                
        }
}
export default Reducer;