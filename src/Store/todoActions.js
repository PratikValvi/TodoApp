export const ADD_TODO = 'ADD_TODO'
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const MARK_AS_COMPLETE = 'MARK_AS_COMPLETE'
export const markAsComplete = (id) => {
    return {
        type: MARK_AS_COMPLETE,
        payload: id
    }
}

export const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}