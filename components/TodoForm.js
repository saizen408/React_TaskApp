import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";
import { LanguageContext } from "./contexts/LanguageContext";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { SortedContext } from "./contexts/SortedContext";
import { words } from "./words";
import { useSnackbar } from "notistack";
import theme2 from "./styles/theme2";
import useStyles from "./styles/useStyles";
import uuid from "uuid/v4";

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);

  const { language } = useContext(LanguageContext);
  const { resetSort } = useContext(SortedContext);
  const { addTodo } = words[language];
  const { enqueueSnackbar } = useSnackbar();
  const handleAddClick = () => {
    const message = `New Task: "${value}"`;
    enqueueSnackbar(message, {
      variant: "success"
    });
  };

  const classes = useStyles();

  return (
    <Paper elevation={3} style={{ margin: "1rem 0", padding: "0" }}>
      <Container disableGutters>
        <form
          className={classes.root}
          onSubmit={e => {
            e.preventDefault();
            handleAddClick();
            resetSort({ type: "ADD", todo: value, id: uuid() });
            dispatch({ type: "ADD", task: value });
            reset();
          }}
          style={{
            height: "65px"
          }}
        >
          <ThemeProvider theme={theme2}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={value}
              onChange={handleChange}
              margin="normal"
              label={addTodo}
              fullWidth
            />
          </ThemeProvider>
        </form>
      </Container>
    </Paper>
  );
}

export default TodoForm;
