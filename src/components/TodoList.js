import { Container, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import "./App.css";

const TodoList = (props) => {
  return (
    <Container className="todoListItemContainer">
      <Grid className="todoItem">
        <Typography className="todoListItemText">{props.item.task}</Typography>
        <IconButton
          color="primary"
          onClick={() => props.editHandler(props.index)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{ color: "darkgreen" }}
          onClick={() => props.completeClickHandler(props.index)}
        >
          <CheckCircleOutlineOutlinedIcon />
        </IconButton>
        <IconButton
          className="todoListDeleteIcon"
          onClick={() => props.deleteHandler(props.index)}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Container>
  );
};

export default TodoList;
