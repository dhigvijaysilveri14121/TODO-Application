import { Container, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import "./App.css";

const TodoList = (props) => {

  return (
    <Container>
      <Grid container spacing={2} className="todoListItemContainer" alignItems='center'>
        <Grid item xs={9} sm={8} className='todoListItemText' >
          {props.item.task}
        </Grid>
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
        <Grid
          className="todoListDeleteIcon"
          onClick={() => props.deleteHandler(props.index)}
        >
          <DeleteIcon />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TodoList;
