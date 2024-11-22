import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import { Container, Grid, Typography } from "@mui/material";
import "./components/App.css";
import TodoDropDownBox from "./components/TodoDropDownBox";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [completedTodoList, setCompletedTodoList] = useState([]);

  const clickHandler = (inputText) => {
    if (editIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editIndex] = { task: inputText };  
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      setTodoList([...todoList, { task: inputText }]);  
    }
    setInputText("");
  };

  const deleteHandler = (i) => {
    const filterList = todoList.filter((_, e) => e !== i);
    setTodoList(filterList);
  };

  const editHandler = (i) => {
    setInputText(todoList[i].task);  
    setEditIndex(i);
  };

  const completeClickHandler = (i) => {
    const updatedList = [...todoList];
    const completedItem = updatedList.splice(i, 1)[0];  
    setCompletedTodoList((prevList) => [...prevList, completedItem]); 
    setTodoList(updatedList);
  };

  const moveToTodoList = (index) => {
    const completedItem = completedTodoList[index];
    const updatedCompletedList = completedTodoList.filter((_, i) => i !== index);
    setCompletedTodoList(updatedCompletedList);
    setTodoList((prevList) => [...prevList, completedItem]);
  };

  return (
    <Container className="mainPage">
      <Grid item xs={12} lg={12}>
        <Typography variant="h3" className="heading">
          My Tasks For Today
        </Typography>
      </Grid>

      <TodoInput
        clickHandler={clickHandler}
        inputText={inputText}
        setInputText={setInputText}
        editIndex={editIndex}
      />

      <TodoDropDownBox
        todoList={todoList}
        completedTodoList={completedTodoList}
        setCompletedTodoList={setCompletedTodoList}
        moveToTodoList={moveToTodoList}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        completeClickHandler={completeClickHandler}
      />
    </Container>
  );
};

export default App;
