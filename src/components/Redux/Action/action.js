import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED_TODO, MARK_COMPLETED_TODO, MARK_INCOMPLETED_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payLoad: {text} 
})


export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payLoad: {id} 
})


export const removeTdo = (id) => ({
    type: REMOVE_TODO,
    payLoad: {id} 
})


export const markCompleted = (id) => ({
    type: MARK_COMPLETED_TODO,
    payLoad: {id} 
})


export const markIncompleted = (id) => ({
    type: MARK_INCOMPLETED_TODO,
    payLoad: {text} 
})


export const filterTodo = (filter) => ({
    type: FILTER_TODO,
    payLoad: {filter} 
})


export const updateSearchTodo = (search) => ({
    type: SEARCH_TODO,
    payLoad: {search} 
})


export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED_TODO_TODO,
})