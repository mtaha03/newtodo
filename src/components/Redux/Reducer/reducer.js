import {ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED_TODO, MARK_COMPLETED_TODO, MARK_INCOMPLETED_TODO, REMOVE_TODO, TOGGLE_TODO} from "../Action/actionTypes";

const initialState = {
    todos: [],
    filter: 'ALL',
    search: ''
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type){


        case ADD_TODO:
            return{
                todo: [...state.todos, {
                    text: action.payLoad.text, completed: false
                }],
                filter: state.filter,
                search: state.search
            }


            case TOGGLE_TODO:
                return{
                    todo: state.todos.map((todo, index)=> index === action.payLoad.id ? {...todo, completed: !todo.completed} : todo),
                    filter: state.filter,
                    search: state.search
                }

                case REMOVE_TODO:
                    return{
                        todo: state.todos.filter((todo, index)=> index !== action.payLoad.id),
                        filter: state.filter,
                        search: state.search
                    }

                    case MARK_COMPLETED_TODO:
                        return{
                            todo: state.todos.map((todo, index)=> index === action.payLoad.id ? {...todo, completed: true} : todo),
                            filter: state.filter,
                            search: state.search
                        }

                        case MARK_INCOMPLETED_TODO:
                            return{
                                todo: state.todos.map((todo, index)=> index === action.payLoad.id ? {...todo, completed: false} : todo),
                                filter: state.filter,
                                search: state.search
                            }

                            case FILTER_TODO:
                                return{
                                    todo: state.todos,
                                    filter: action.payLoad.filter,
                                    search: state.search
                                }

                                case TOGGLE_TODO:
                                    return{
                                        todo: state.todos,
                                        filter: state.filter,
                                        search: action.payLoad .search
                                    }

                                    
                    case MARK_ALL_COMPLETED_TODO:
                        return{
                            todo: state.todos.map((todo)=> ({...todo, completed:true}) ),
                            filter: state.filter,
                            search: state.search
                        }
                        default:
                        return state;
    };
}
export default todoReducer;