import { ActionType } from "./ActionType";

const intialState = {
    students:[],
    // students:{},
    loading: true
}

const useReducers = (state = intialState, action) => {

    switch(action.type){

        case ActionType.GET_STUDENTS:
            return{
            ...state,
            students: action.payload,
            loading:false,
            }

            case ActionType.DELETE_STUDENTS:
                return{
                ...state,
                // students: action.payload,
                loading:false,
                }
            case ActionType.ADD_STUDENTS:
                    return{
                    ...state,
                    // students: action.payload,
                    loading:false,
                    }

            case ActionType.GET_SINGLE_STUDENT:
                return{
                  ...state,
                 students: action.payload,
                 loading:false,
               }
            case ActionType.UPDATE_STUDENTS:
                return{
                ...state,
                // students: action.payload,
                loading:false,
                }

        default:
            return state;
    }
}

export default useReducers;
