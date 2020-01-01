import { amber, green } from "@material-ui/core/colors";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      2
    )}px`,
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(8)
    }
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(1)
    }
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(-1),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(3)
    }
  },
  submit: {
    marginTop: theme.spacing(3)
  },

  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(10)
  },
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

export default styles;
