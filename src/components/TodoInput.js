import { Button, Container, Grid, TextField } from "@mui/material";
import "./App.css";

const TodoInput = ({ clickHandler, inputText, setInputText, editIndex }) => {
  const changeHandler = (e) => {
    setInputText(e.target.value);
  };
  const handleEnterClick = (e) => {
    if (e.key === "Enter" && inputText.trim()!=='') {
      clickHandler(inputText);
      setInputText("");
    }
  };
  
  return (
    <Container className="todoInputContainer">
      <Grid container className="todoInputGrid">
        <Grid item className="todoInputField">
          <TextField
            label="enter Todo"
            value={inputText}
            onChange={changeHandler}
            className="todoInputField"
            onKeyDown={handleEnterClick}
            fullWidth
          />
        </Grid>

        <Button
          className="todoInputButton"
          onClick={() => {
            clickHandler(inputText);
            setInputText("");
            
          }}
        >
          {editIndex !== null ? "Update" : "Add"}
        </Button>
      </Grid>
    </Container>
  );
};

export default TodoInput;
