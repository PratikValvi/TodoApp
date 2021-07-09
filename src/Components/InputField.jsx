import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const InputField = () => {
    return (
        <div className='inputfield-wrapper'>
            <Input fluid={true} placeholder='Write Todo here !!'/>
            <Button primary className='addtodo-button'>Add Todo</Button>
        </div>
    )
}

export default InputField