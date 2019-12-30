import React, { useContext, memo, useEffect } from "react";
import { SortableElement } from "react-sortable-hoc";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Switch from "@material-ui/core/Switch";
import { useSnackbar } from "notistack";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { DispatchContext } from "./contexts/todoscontext";
import { LanguageContext } from "./contexts/LanguageContext";
import { Paper } from "@material-ui/core";
import moment from "moment";
import { words } from "./words";

const DraggableTodo = SortableElement(
  ({ _id, description, completed, updatedAt, sorted, tasksDBIdx }) => {
    const dispatch = useContext(DispatchContext);
    const { language } = useContext(LanguageContext);
    const [isEditing, toggle] = useToggleState(false);
    const { enqueueSnackbar } = useSnackbar();
    const { lastUpdated } = words[language];

    const handleDeleteClick = () => {
      enqueueSnackbar(`❌ Deleted Task: "${description}"`);
    };

    const handleToggleClick = () => {
      enqueueSnackbar(`Good work! 💪 Task: "${description}" completed!`);
    };

    const formatedDate = () => {
      moment.locale(language);
      return moment(updatedAt).format("lll");
    };

    return (
      <Paper elevation={3}>
        <ListItem style={{ height: "65px" }} divider={true}>
          {isEditing ? (
            <EditTodoForm
              _id={_id}
              tasksDBIdx={tasksDBIdx}
              sorted={sorted}
              description={description}
              toggleEditForm={toggle}
            />
          ) : (
            <>
              <Switch
                tabIndex={-1}
                onChange={() => {
                  sorted({ type: "TOGGLE", id: _id, completed: completed });
                  if (tasksDBIdx !== undefined) {
                    dispatch({
                      type: "TOGGLE",
                      id: tasksDBIdx._id,
                      completed: completed
                    });
                  }
                  console.log(completed);
                  completed ? null : handleToggleClick();
                }}
                checked={completed}
              />
              <ListItemText
                style={{ textDecoration: completed ? "line-through" : "none" }}
                primary={description}
                secondary={`${lastUpdated}: ${formatedDate()}`}
              ></ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Delete"
                  onClick={() => {
                    sorted({ type: "REMOVE", id: _id });
                    if (tasksDBIdx !== undefined) {
                      dispatch({ type: "REMOVE", id: tasksDBIdx._id });
                    }
                    handleDeleteClick();
                  }}
                >
                  <DeleteIcon></DeleteIcon>
                </IconButton>
                <IconButton aria-label="Edit" onClick={toggle}>
                  <EditIcon></EditIcon>
                </IconButton>
              </ListItemSecondaryAction>{" "}
            </>
          )}
        </ListItem>
      </Paper>
    );
  }
);

export default memo(DraggableTodo);
