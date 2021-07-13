import React from 'react'
import { Checkbox, Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { markAsComplete, deleteTodo } from '../Store/todoActions'

const CheckboxContainer = (props) => {
    const { todo } = props
    const dispatch = useDispatch()

    const handleCheckboxClick = () => {
        dispatch(markAsComplete(todo.id))
    }

    const handleIconClick = () => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <div className='checkbox-container'>
            <Checkbox 
                id={todo.id}
                label={todo.label} 
                onClick={handleCheckboxClick}
            />
            <Icon
                name='delete'
                size='large'
                color='red'
                onClick={handleIconClick}
            />
        </div>
    )
}

const renderTodoList = (todos) => {
    if (todos.length > 0) {
        return todos.map((todo) => <CheckboxContainer todo={todo}/>)
    } else {
        return <h3>Todo List is Empty</h3>
    }
}

const TodoList = () => {
    const todos = useSelector(state => state.todos)

    return (
        <div className='todolist-wrapper'>
            { 
                renderTodoList(todos)
            }
        </div>
    )
}

export default TodoList
