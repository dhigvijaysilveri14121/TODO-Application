import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  const[listTodo,setListTodo]=useState([])
  let addList=(inputText)=>{
    setListTodo([...listTodo,inputText])
  }
  const deleteHandler=(key)=>{
    let newListTodo=[...listTodo]
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList}/>
        {listTodo.map(((item,i)=>
          <TodoList key={i} item={item} deleteHandler={deleteHandler} index={i}/>
        ))}
      </div>
    </div>
  )
}

export default App



import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const TodoInput = ({addList}) => {
  const[inputText,setInputText]=useState('')
 
  return (
    <div className='input-container'>
        <TextField 
        label='Enter your todo' 
        value={inputText}
        className='input-box-todo'
        onChange={(e)=>{setInputText(e.target.value)}}/>
        <Button className='add-btn'
          onClick={()=>{addList(inputText)
          setInputText('')
        }}
        >+</Button>
       
    </div>
  )
}

export default TodoInput




import { List } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = (props) => {
  return (
    
    <List>
      {props.item}
      <span onClick={e=>{props.deleteHandler(props.index)}}>
        <DeleteIcon />
      </span>
    </List>
  )
}

export default TodoList