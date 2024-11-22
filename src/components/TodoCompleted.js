import React from "react";
import { Container, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const TodoCompleted = ({
  completedTodoList,
  deleteHandler,
  moveToTodoList,
}) => {
  return (
    <Container className="todoCompletedContainer">
      {completedTodoList.length > 0 ? (
        completedTodoList.map((item, index) => (
          <div key={item.id} className="todoCompletedItem">
            <Typography className="todoCompletedItemText">
              {item.task}
            </Typography>
            <IconButton
              className="todoNotCompletedButton"
              onClick={() => moveToTodoList(index)}
            >
              <PriorityHighIcon />
            </IconButton>
            <IconButton
              className="completedTodoListDeleteIcon"
              onClick={() => deleteHandler(index)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))
      ) : (
        <Typography>No Completed Tasks</Typography>
      )}
    </Container>
  );
};

export default TodoCompleted;
