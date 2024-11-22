import React, { useState } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import TodoList from "./TodoList";
import TodoCompleted from "./TodoCompleted";

const TodoDropDownBox = React.memo(
  ({
    todoList,
    completedTodoList,
    setCompletedTodoList,
    moveToTodoList,
    deleteHandler,
    editHandler,
    completeClickHandler,
  }) => {
    const [view, setView] = useState("default");

    const handleViewChange = (event) => {
      setView(event.target.value);
    };

    const deleteCompletedTask = (i) => {
      setCompletedTodoList((prevList) =>
        prevList.filter((_, index) => index !== i)
      );
    };

    return (
      <Container className="dropDownContainer">
        <FormControl
          variant="outlined"
          className="dropBox"
          sx={{ marginBottom: "20px" }}
        >
          <InputLabel>View</InputLabel>
          <Select value={view} onChange={handleViewChange} label="View">
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="todoList">Pending Tasks</MenuItem>
            <MenuItem value="completedList">Completed Tasks</MenuItem>
          </Select>
        </FormControl>

        {view === "default" && (
          <>
            {todoList.map((item, i) => (
              <TodoList
                key={i}
                item={item}
                deleteHandler={deleteHandler}
                index={i}
                editHandler={editHandler}
                completeClickHandler={completeClickHandler}
              />
            ))}

            {completedTodoList.length > 0 && (
              <>
                <h3>Completed Tasks</h3>
                <TodoCompleted
                  completedTodoList={completedTodoList}
                  deleteHandler={deleteCompletedTask}
                  moveToTodoList={moveToTodoList}
                />
              </>
            )}
          </>
        )}

        {view === "todoList" &&
          todoList.map((item, i) => (
            <TodoList
              key={i}
              item={item}
              deleteHandler={deleteHandler}
              index={i}
              editHandler={editHandler}
              completeClickHandler={completeClickHandler}
            />
          ))}

        {view === "completedList" && completedTodoList.length > 0 && (
          <>
            <h3>Completed Tasks</h3>
            <TodoCompleted
              completedTodoList={completedTodoList}
              deleteHandler={deleteCompletedTask}
              moveToTodoList={moveToTodoList}
            />
          </>
        )}
      </Container>
    );
  }
);

export default TodoDropDownBox;
