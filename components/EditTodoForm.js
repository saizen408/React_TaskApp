import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./contexts/todoscontext";
import { useSnackbar } from "notistack";

function EditTodoForm({
  _id,
  description,
  toggleEditForm,
  sorted,
  tasksDBIdx
}) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(description);
  const { enqueueSnackbar } = useSnackbar();

  const handleEditClick = () => {
    enqueueSnackbar(`✏️ Edited Task: "${description}"`);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleEditClick();
        sorted({ type: "EDIT", id: _id, todo: value });
        if (tasksDBIdx !== undefined) {
          dispatch({ type: "EDIT", id: tasksDBIdx._id, newTask: value });
        }
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "75%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
