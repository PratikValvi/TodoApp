import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import { addTodo } from '../Store/todoActions'
import { useState } from 'react'
import { v4 as randomId } from 'uuid'
import { useDispatch } from 'react-redux'

const InputField = () => {

    const [todoLabel,setTodoLabel] = useState('')

    const dispatch = useDispatch()

    const handleClick = () => {
        const todo = {
            label: todoLabel,
            id: randomId(),
            isCompleted: false
        }
        dispatch(addTodo(todo))
        setTodoLabel(() => "")
    }

    const handleChange = (event) => {
        setTodoLabel(() => event.target.value)
    }

    return (
        <div className='inputfield-wrapper'>
            <Input value={todoLabel} fluid={true} placeholder='Write Todo here !!' onChange={handleChange}/>
            <Button primary className='addtodo-button' onClick={handleClick}>Add Todo</Button>
        </div>
    )
}

export default InputField