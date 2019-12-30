import React, { useContext, memo } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { handleAuthSSR } from "../components/handleAuthSSR";
import { ThemeContext } from "../components/contexts/ThemeContext";
import { TodosProvider } from "../components/contexts/todos.context";

function TodoAppPage(props) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Paper
      style={{
        paddding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: isDarkMode ? "#394bad" : "#edeef2",
        overflow: "scroll"
      }}
      elevation={0}
    >
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm {...props} clicked={props.clicked} />
            <TodoList {...props} clicked={props.clicked} />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

TodoAppPage.getInitialProps = async ctx => {
  const res = await handleAuthSSR(ctx);
  const { data } = res;

  return {
    posts: data
  };
};

export default TodoAppPage;
