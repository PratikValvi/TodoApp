import { ADD_TODO, DELETE_TODO, MARK_AS_COMPLETE } from "./todoActions"

const INITIAL_STATE = {
    todos: []
}

const todoReducer = (state=INITIAL_STATE,action) => {
    const { type, payload } = action
    switch(type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(payload)
            }
        case MARK_AS_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === payload ? { ...todo, isCompleted: !todo.isCompleted } : todo))
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => (todo.id !== payload))
            }
        default:
            return state
    }
}

export default todoReducer