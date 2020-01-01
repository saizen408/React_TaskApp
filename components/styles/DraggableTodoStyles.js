import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  removeBtn: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(0)
    }
  },
  editBtn: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(0)
    }
  }
}));

export default styles;
