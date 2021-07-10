import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { markAsComplete } from '../Store/todoActions';

const renderTodoList = (props) => {
    const { todos, dispatch } = props

    const handleClick = (event) => {
        dispatch(markAsComplete(event.target.id))
    }

    if (todos.length > 0) {
        return todos.map(
            (todo) => <Checkbox 
                        id={todo.id}
                        label={todo.label} 
                        onClick={handleClick}
                      />)
    } else {
        return <h3>Todo List is Empty</h3>
    }
}

const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div className='todolist-wrapper'>
            { 
                renderTodoList(todos,dispatch)
            }
        </div>
    )
}

export default TodoList
